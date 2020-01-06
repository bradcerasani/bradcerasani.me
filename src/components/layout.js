import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import { GlobalStyle } from './global.css';
import { H1, Byline } from './atoms/headings';
import { Nav, NavItem, NavImage } from './molecules/nav';
import { Header, Aside } from './layout.css';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <Fragment>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: '720px',
            padding: `32px`,
          }}
        >
          <Header>
            <H1>
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
            </H1>

            <Aside>
              <Byline>
                Design & <br /> <span>Engineering</span>
              </Byline>
              <Nav>
                <NavItem>Index</NavItem>
                <NavItem>
                  About
                  <NavImage src="/images/puppo.jpg" />
                </NavItem>
                <NavItem>
                  Writing
                  <NavImage src="/images/writing.gif" />
                </NavItem>
              </Nav>
            </Aside>
          </Header>
          <main>{children}</main>
          {/* <footer>© {new Date().getFullYear()}</footer> */}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
