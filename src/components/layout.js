import React, { Fragment } from 'react';

import { GlobalStyle } from './global.css';
import Header from './header';
import Container from './container';

function Layout(props) {
  const { children, backgroundColor } = props;

  return (
    <Fragment>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>
        <Header {...props} />
        <main>{children}</main>
      </Container>
    </Fragment>
  );
}

export default Layout;
