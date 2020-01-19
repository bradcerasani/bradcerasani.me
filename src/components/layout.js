import React, { Fragment } from 'react';

import { GlobalStyle } from './global.css';
import Header from './header';

function Layout(props) {
  const {
    title,
    headline = 'Design & Engineering',
    children,
    backgroundColor,
  } = props;

  return (
    <Fragment>
      <GlobalStyle backgroundColor={backgroundColor} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '700px',
          padding: `32px`,
        }}
      >
        <Header {...props} />
        <main>{children}</main>
        {/* <footer>© {new Date().getFullYear()}</footer> */}
      </div>
    </Fragment>
  );
}

export default Layout;
