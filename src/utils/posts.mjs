import fs from 'fs';
import glob from 'fast-glob';
import matter from 'gray-matter';
import path from 'path';

export const CONTENT_DIRECTORY = 'content';
export const POSTS_PATH = path.join(process.cwd(), CONTENT_DIRECTORY);
export const allMarkdown = glob.sync(`${POSTS_PATH}/**/*.mdx`);

export const stripIndex = (filepath) => filepath.replace(/\/index\.[^.]+$/, '');

export const postFileSlugs = allMarkdown.map((filePath) =>
  stripIndex(filePath)
);

export const posts = allMarkdown
  .map((filePath) => {
    const { content, data } = matter(fs.readFileSync(filePath));
    const slug = stripIndex(filePath.split(CONTENT_DIRECTORY)[1]);
    const type = slug.includes('/projects/') ? 'PROJECT' : 'POST';

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
