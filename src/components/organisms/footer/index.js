import React, { useState } from 'react';
import styled from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { breakpoint, font } from 'src/components/theme';
import { ChatBubble, Container } from 'src/components/atoms';

const StyledFooter = styled.footer`
  border-top: 2px solid currentColor;
  font-family: ${font.family.serif};
  font-size: 1.125rem;
  margin-top: 1.5rem;
  padding-bottom: 3rem;
  padding-top: 1.5rem;
  transition-duration: 400ms;
  transition-property: color;
  transition-timing-function: ease-in-out;

  a {
    display: inline-block;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    user-select: none;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-top: 6rem;
    padding-top: 3rem;
  }
`;

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <StyledFooter>
      <Container>
        <a href="/rss.xml">RSS</a>
        &nbsp;•&nbsp;
        <a
          href="#show-email"
          onClick={(e) => {
            e.preventDefault();
            if (!showContact) {
              setShowContact(true);
              trackCustomEvent({
                category: 'Interactive Elements',
                label: 'Footer Contact - Say Hey',
                action: 'Click',
              });
            }
          }}
          style={{ cursor: showContact ? 'auto' : 'pointer' }}
        >
          Say hey
        </a>
        {showContact && <ChatBubble>bradcerasani@gmail.com</ChatBubble>}
      </Container>
    </StyledFooter>
  );
};
