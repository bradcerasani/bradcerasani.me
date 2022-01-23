import path from 'path';
import glob from 'fast-glob';

export const contentDirectory = 'content';

export const POSTS_PATH = path.join(process.cwd(), contentDirectory);

export const postFilePaths = glob.sync(`${POSTS_PATH}/**/*.md`);

export const postFileSlugs = postFilePaths.map((filePath) =>
  filePath.split(contentDirectory)[1].replace('index.md', '')
);
