import { serialize } from 'next-mdx-remote/serialize';

import { posts, pagination } from 'src/utils/posts.mjs';
import PostDetailTemplate from 'src/templates/post-detail';

export default function PostPage(props) {
  return <PostDetailTemplate {...props} />;
}

export const getStaticProps = async ({ params }) => {
  const notFound = { notFound: true };

  try {
    const slug = params.slug.reduce((acc, curr) => `${acc}/${curr}`, '');
    const post = posts.find((post) => post.slug === slug);
    const { content, frontmatter } = post;

    const source = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [
          require('remark-prism'),
          require('@ngsctt/remark-smartypants'),
        ],
      },
    });

    return {
      props: {
        frontmatter,
        pagination: pagination[slug],
        slug,
        source,
      },
    };
  } catch (error) {
    return notFound;
  }
};

export const getStaticPaths = async () => {
  const paths = posts
    .filter(({ frontmatter }) => frontmatter.skipPage !== true)
    .map(({ slug }) => ({ params: { slug: slug.split('/').slice(1) } }));

  return {
    paths,
    fallback: false,
  };
};
