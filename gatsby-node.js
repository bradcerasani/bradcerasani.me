const path = require(`path`);
const fs = require('fs-extra');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postDetail = path.resolve(`./src/templates/post-detail.js`);
  const projectDetail = path.resolve(`./src/templates/project-detail.js`);
  const result = await graphql(
    `
      {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                image
                skipPage
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create MDX pages
  const pages = result.data.allMdx.edges.filter((page) => {
    return !page.node.frontmatter.skipPage;
  });

  pages.forEach((page, index) => {
    const slug = page.node.fields.slug;
    const previous = index === pages.length - 1 ? null : pages[index + 1].node;
    const next = index === 0 ? null : pages[index - 1].node;

    createPage({
      component: slug.includes('/projects') ? projectDetail : postDetail,
      path: slug,
      context: {
        slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    const type = value.split('/')[1].toUpperCase() || null;

    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      name: `type`,
      node,
      value: type,
    });
  }

  // Move post and project media into /public for consumption by Imgix
  if (node.internal.mediaType && (node.internal.mediaType.includes('image') || node.internal.mediaType.includes('video'))) {
    let directoryName = '';

    switch (node.internal.mediaType) {
      case 'image/gif':
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/png':
        directoryName = 'images';
        break;
      case 'video/mp4':
      case 'video/webm':
        directoryName = 'video';
        break;
      default:
        console.warn(`${node.internal.mediaType} is unknown`);
    }

    const destination = path.join(
      process.cwd(),
      'public',
      directoryName,
      node.relativePath
    );

    fs.copy(node.absolutePath, destination, (err) => {
      if (err) {
        console.error('Error copying file', err);
      }
    });
  }
};
