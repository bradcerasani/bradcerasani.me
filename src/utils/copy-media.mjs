import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';

// Project media is collocated with content (i.e. markdown) files. In order to
//  make media public, we need to copy images and video into the `public`
//  directory, while preserving the subdirectory structure. The copied files are
//  treated as built files, and ignored from version control.

const source = path.join(process.cwd(), 'content');

const mediaFiles = await glob(`${source}/**/*`, {
  ignore: ['**/*.md', '**/*.js', '**/*.json'],
});

mediaFiles.forEach((file) => {
  const subDirectory = file.includes('.mp4') ? 'public/video' : 'public/images';
  const destination = file.replace('content', subDirectory);

  fs.copy(file, destination, (err) => {
    if (err) throw err;
  });
});

console.log(`Media copied to 'public' directory.`);
