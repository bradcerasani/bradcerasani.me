import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';

import 'src/css/modern-normalize.css';
import 'src/css/_settings.css';
import 'src/css/animations.css';
import 'src/css/elements.css';
import 'src/css/fonts.css';
import 'src/css/footnotes.css';
import 'src/css/prism-theme.css';

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

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
