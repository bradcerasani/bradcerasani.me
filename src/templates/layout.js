import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import {
  Annot,
  Container,
  Footer,
  Header,
  Image,
  ImageCompare,
  LayoutObject,
  Note,
  ThreeUp,
  Video,
  Vimeo,
} from 'src/components';

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

function Layout({ children, ...props }) {
  return (
    <>
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
