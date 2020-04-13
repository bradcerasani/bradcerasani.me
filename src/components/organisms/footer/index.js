import React, { useState } from 'react';
import styled from 'styled-components';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { breakpoint, font } from '../../theme';
import { ChatBubble } from '../../atoms';

const StyledFooter = styled.footer`
  align-items: center;
  border-top: 4px solid currentColor;
  display: flex;
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
    margin-top: 3rem;
    padding-top: 3rem;
  }
`;

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <StyledFooter>
      <div>
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
        {showContact && <ChatBubble>brad cerasani at gmail dot com</ChatBubble>}
      </div>
    </StyledFooter>
  );
};
