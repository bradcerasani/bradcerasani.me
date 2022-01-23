import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

import { postFileSlugs, POSTS_PATH } from 'utils/posts';
import PostDetailTemplate from 'src/templates/post-detail';

export default function PostPage(props) {
  const { source, frontMatter } = props;

  return (
    <PostDetailTemplate source={source} frontMatter={frontMatter} {...props} />
  );
}

export const getStaticProps = async ({ params }) => {
  try {
    const slug = `/writing/${params.slug}`;
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
        slug,
        source: mdxSource,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths = async () => {
  const paths = postFileSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
};
