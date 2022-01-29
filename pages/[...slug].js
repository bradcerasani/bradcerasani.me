import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { pagination, postFileSlugs, POSTS_PATH } from 'src/utils/posts';
import PostDetailTemplate from 'src/templates/post-detail';

export default function PostPage(props) {
  const { source, frontMatter } = props;

  return (
    <PostDetailTemplate source={source} frontMatter={frontMatter} {...props} />
  );
}

export const getStaticProps = async ({ params }) => {
  const notFound = { notFound: true };
  const basePath = params?.slug[0] || '';

  // Before looking for the associated markdown file, verify basePath is one of
  // two supported variants. If not, return early.
  //
  // Having a catch-all route at base is probably a bad idea, but avoids
  // duplicating [slug].js in /projects and /writing directories as initially
  // implemented upon migration away from Gatsby.
  //
  // Deprecating basePath altogether instead of bifurcating posts and projects
  // is something to consider, but in the interim, this works.

  if (basePath !== 'writing' && basePath !== 'projects') {
    return notFound;
  }

  try {
    const slug = `/${params.slug[0]}/${params.slug[1]}`;
    const postFilePath = path.join(POSTS_PATH, `${slug}/index.md`);
    const source = fs.readFileSync(postFilePath);
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [
          require('remark-prism'),
          require('@ngsctt/remark-smartypants'),
        ],
      },
      scope: data,
    });

    return {
      props: {
        frontMatter: data,
        pagination: pagination[slug],
        slug,
        source: mdxSource,
      },
    };
  } catch (error) {
    return notFound;
  }
};

export const getStaticPaths = async () => {
  const paths = postFileSlugs
    .filter((slug) => !slug.includes('misc'))
    .map((slug) => ({ params: { slug: [slug] } }));

  return {
    paths,
    fallback: 'blocking',
  };
};
