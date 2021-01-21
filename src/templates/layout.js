import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

import {
  Annot,
  Container,
  Footer,
  Grid,
  GridItem,
  Header,
  Image,
  ImageCompare,
  Note,
  ThreeUp,
  Video,
  Vimeo,
} from 'src/components';

const components = {
  Annot,
  Grid,
  GridItem,
  ImageCompare,
  Note,
  PostImage: Image, // Image appears to be a reserved word
  ThreeUp,
  Video,
  Vimeo,
};

function Layout({ children, ...props }) {
  console.log(
    '%c Would you like to play a game?  https://bradcerasani.me/play',
    'color: white; background-color: hsl(0, 0%, 10%); padding: 1rem;'
  );
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
