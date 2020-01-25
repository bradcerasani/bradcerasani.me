import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';

import { GlobalStyle } from './global.css';
import Header from './header';
import Container from './container';

import { Note } from './atoms';

const components = {
  Note,
};

function Layout(props) {
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
}

export default Layout;
