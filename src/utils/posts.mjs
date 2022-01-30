import fs from 'fs';
import glob from 'fast-glob';
import matter from 'gray-matter';
import path from 'path';

export const contentDirectory = 'content';

export const POSTS_PATH = path.join(process.cwd(), contentDirectory);

export const postFilePaths = glob.sync(`${POSTS_PATH}/**/*.mdx`);

export const postFileSlugs = postFilePaths.map((filePath) =>
  filePath.split(contentDirectory)[1].replace('/index.mdx', '')
);

export const posts = postFilePaths
  .map((filePath) => {
    const source = fs.readFileSync(filePath);
    const { content, data } = matter(source);
    const type = filePath.includes('/writing/') ? 'POST' : 'PROJECT';
    const slug = filePath.split('/content')[1].replace('/index.mdx', '');

    return {
      type,
      slug,
      content,
      frontmatter: data,
      filePath,
    };
  })
  .sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });

export const pagination = posts
  .filter(({ frontmatter }) => frontmatter.skipPage !== true)
  .map((post, index, arr) => {
    const next =
      index === 0
        ? null
        : {
            slug: arr[index - 1].slug,
            title: arr[index - 1].frontmatter.title,
          };

    const prev =
      index === arr.length - 1
        ? null
        : {
            slug: arr[index + 1].slug,
            title: arr[index + 1].frontmatter.title,
          };

    return {
      [post.slug]: {
        prev,
        next,
      },
    };
  })
  .reduce((acc, curr) => ({ ...acc, ...curr }), {});
