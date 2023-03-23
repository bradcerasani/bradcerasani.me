import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';

import { posts, pagination } from 'src/utils/posts.mjs';
import PostDetailTemplate from 'src/templates/post-detail';

// Project- and post-specific components must be included at the provider level
// ref: https://github.com/hashicorp/next-mdx-remote/issues/143
// Consider swapping next-mdx-remote for mdx-bundler
import Swatches from 'content/projects/hue-gallery/Swatches';
import DemoButton from 'content/writing/hacky-styling-of-visited-links/DemoButton';

import {
  Caption,
  Figure,
  Grid,
  GridItem,
  Image,
  ImageCompare,
  Img,
  Note,
  Video,
  PostVideo,
  Vimeo,
} from 'src/components';

const components = {
  Caption,
  DemoButton,
  Figure,
  Grid,
  GridItem,
  ImageCompare,
  Img,
  Link,
  Note,
  PostImage: Image, // Image appears to be a reserved word
  PostVideo,
  Swatches,
  Video,
  Vimeo,
};

export default function PostPage(props) {
  return (
    <MDXProvider components={components}>
      <PostDetailTemplate {...props} />
    </MDXProvider>
  );
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
        posts,
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
