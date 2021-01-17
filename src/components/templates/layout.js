import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import { Container, Note } from 'src/components/atoms';
import { Footer, Header } from 'src/components/organisms';
import {
  Annot,
  Image,
  ImageCompare,
  LayoutObject,
  ThreeUp,
  Video,
  Vimeo,
} from 'src/components/molecules';

const components = {
  Annot,
  ImageCompare,
  LayoutObject,
  Note,
  PostImage: Image, // Image appears to be a reserved word
  ThreeUp,
  Video,
  Vimeo,
};

export const Layout = ({ children, ...props }) => {
  return (
    <>
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>
      </Container>
      <Footer />
    </>
  );
};
