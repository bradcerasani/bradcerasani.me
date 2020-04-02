import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { GlobalStyle } from '../_global';
import { Header } from '../organisms';
import { Container, Note } from '../atoms';
import { Image, Video } from '../molecules';

const components = {
  Note,
  PostImage: Image, // Image appears to be a reserved word
  Video,
};

export const Layout = (props) => {
  const { children, backgroundColor } = props;

  return (
    <Fragment>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>
        <Header {...props} />

        <MDXProvider components={components}>{children}</MDXProvider>
      </Container>
    </Fragment>
  );
};
