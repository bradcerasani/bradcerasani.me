import React from 'react';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

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
