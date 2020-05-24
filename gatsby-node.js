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

  // Create blog posts pages.
  const posts = result.data.allMdx.edges;

  posts.forEach((post, index) => {
    const isProject = post.node.fields.slug.includes('/projects/');
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    if (post.node.fields.slug.includes('/about/')) {
      return;
    }

    createPage({
      path: post.node.fields.slug,
      component: isProject ? projectDetail : postDetail,
      context: {
        slug: post.node.fields.slug,
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
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  // Move post and project media into /public for consumption by Imgix
  if (node.internal.mediaType) {
    let directoryName = '';

    switch (node.internal.mediaType) {
      case 'image/gif':
      case 'image/jpeg':
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
