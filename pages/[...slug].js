import { serialize } from 'next-mdx-remote/serialize';

import { posts, POSTS_PATH, pagination } from 'src/utils/posts.mjs';
import PostDetailTemplate from 'src/templates/post-detail';

export default function PostPage(props) {
  return <PostDetailTemplate {...props} />;
}

export const getStaticProps = async ({ params }) => {
  const notFound = { notFound: true };
  const basePath = params?.slug[0];

  if (basePath !== 'writing' && basePath !== 'projects') {
    return notFound;
  }

  try {
    const slug = `/${params.slug[0]}/${params.slug[1]}`;
    const post = posts.find((post) => post.slug === slug);
    const { content, frontmatter } = post;

    // Double check that the post exists and should _not_ be skipped
    if (!content || !frontmatter || frontmatter.skipPage) return notFound;

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
    .map(({ slug }) => ({ params: { slug: [POSTS_PATH + slug] } }));

  return {
    paths,
    fallback: 'blocking',
  };
};
