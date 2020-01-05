import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  body {
    background-color: #fafafa;
    ${'' /* background-color: #EBEBE8; */}
    ${'' /* background-color: #CDBDA5; */}
    background-color: #e5dccf;
    background-color: HSLA(35, 10%, 86%, 1.00);
    text-rendering: optimizeLegibility;
  }

  section {
    font-size: 20px;
    line-height: 1.5;
    margin: 0;
    color: hsla(0, 0%, 20%, 1);
  }

  p {
    margin: 0;
    margin-bottom: 24px;
  }
`;

const H1 = styled.div`
  /* font-family: 'Vulf Mono Demo' */
  font-family: Karbon;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
  font-size: 24px;
  line-height: 1;
  letter-spacing: 2px;
  color: hsl(0, 0%, 40%);
  color: HSLA(26, 32%, 20%, 1);
  color: HSLA(43, 19%, 28%, 1);
  color: hsla(0, 0%, 36%, 1);
  /* text-shadow: -2px 2px 0 HSLA(28, 21%, 55%, 0.5); */
`;

const Header = styled.div`
  margin-bottom: 40px;
  margin-top: 80px;
`;

const Byline = styled.div`
  font-size: 64px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  /* font-style: italic; */
  font-weight: 700;
`;

const Aside = styled.div`
  margin-top: 64px;
  display: flex;
`;

const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

const NavItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: hsla(0, 0%, 40%, 1);
  color: HSLA(43, 19%, 28%, 1);
  color: HSLA(43, 10%, 59%, 1);
  margin-top: 12px;
  border-radius: 8px;
  position: relative;

  &:first-of-type {
    /* color: orange; */
    color: HSLA(199, 85%, 29%, 1);
    color: HSLA(214, 86%, 42%, 1);
    color: HSLA(43, 19%, 28%, 1);

    &::after {
      position: absolute;
      content: '◝';
      font-size: 32px;
      /* top: -2px; */
      bottom: -17px;
      right: -24px;
      /* color: black; */
    }
  }
`;

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
                <NavItem>About</NavItem>
                <NavItem>Journal</NavItem>
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
