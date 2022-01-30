import fs from 'fs-extra';
import path from 'path';
import glob from 'fast-glob';

// Project media is collocated with content (i.e. markdown) files. In order to
//  make media public, we need to copy images and video into the `public`
//  directory, while preserving the subdirectory structure. The copied files are
//  treated as built files, and ignored from version control.

const source = path.join(process.cwd(), 'content');

const mediaFiles = await glob(`${source}/**/*`, {
  ignore: ['**/*.mdx', '**/*.js', '**/*.json'],
});

function copyMedia(mediaFiles) {
  mediaFiles.forEach((file) => {
    const subDirectory = /\.(webm|mp4)$/i.test(file)
      ? 'public/video'
      : 'public/images';

    try {
      fs.copySync(file, file.replace('content', subDirectory));
    } catch (err) {
      console.error(err);
    }
  });
}

copyMedia(mediaFiles);

console.log(`Media copied to 'public' directory.`);
