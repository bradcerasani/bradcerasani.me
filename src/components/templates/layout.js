import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import { GlobalStyle } from 'src/components/_global';
import { Footer, Header } from 'src/components/organisms';
import { Container, Note } from 'src/components/atoms';
import {
  Image,
  ImageCompare,
  ThreeUp,
  Video,
  Vimeo,
  LayoutObject,
} from 'src/components/molecules';

const components = {
  Note,
  ImageCompare,
  PostImage: Image, // Image appears to be a reserved word
  ThreeUp,
  Video,
  Vimeo,
  LayoutObject,
};

export const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>
      </Container>
      <Footer />
    </>
  );
};
