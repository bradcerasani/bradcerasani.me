// These files are concatenated and inlined by Gatsby in the document <head>

import 'src/css/modern-normalize.css';
import 'src/css/_settings.css';
import 'src/css/animations.css';
import 'src/css/elements.css';
import 'src/css/fonts.css';

import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import {
  Annot,
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
  Annot,
  Figure,
  Grid,
  GridItem,
  ImageCompare,
  Img,
  Link,
  Note,
  PostImage: Image, // Image appears to be a reserved word
  PostVideo,
  Video,
  Vimeo,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
