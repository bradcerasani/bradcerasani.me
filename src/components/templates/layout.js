import React, { Fragment, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

import { font, color } from '../theme';
import { GlobalStyle } from '../_global';
import { Header } from '../organisms';
import { ChatBubble, Container, Note } from '../atoms';
import { Image, Video } from '../molecules';

const Footer = styled.footer`
  align-items: center;
  border-top: 4px solid black;
  display: flex;
  font-family: ${font.family.serif};
  font-size: 1.125rem;
  margin-top: 1.5rem;
  padding-bottom: 6rem;
  padding-top: 3rem;

  span {
    cursor: pointer;
    display: inline-block;

    &:hover {
      text-decoration-color: ${color.grey.default};
      text-decoration-line: underline;
    }
  }
`;

const components = {
  Note,
  PostImage: Image, // Image appears to be a reserved word
  Video,
};

export const Layout = (props) => {
  const { children, backgroundColor } = props;
  const [showContact, setShowContact] = useState(false);

  return (
    <Fragment>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Container>
        <Header {...props} />
        <MDXProvider components={components}>{children}</MDXProvider>

        <Footer>
          <div>
            <span>RSS</span> •{' '}
            <span onClick={() => setShowContact(!showContact)}>Say hey</span>
            {showContact && (
              <ChatBubble>brad cerasani at gmail dot com</ChatBubble>
            )}
          </div>
        </Footer>
      </Container>
    </Fragment>
  );
};
