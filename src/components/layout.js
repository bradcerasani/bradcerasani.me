import React from 'react';
import { Link } from 'gatsby';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1 style={{ marginBottom: `16px`, marginTop: 0 }}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: '600px',
          padding: `32px`,
          fontFamily: `-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    );
  }
}

export default Layout;
