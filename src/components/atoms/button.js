import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { color } from '../theme';

const ButtonLinkIcon = styled.span`
  bottom: -0.3rem;
  display: inline-block;
  height: 1.25rem;
  left: 0.25rem;
  position: relative;
  transition-duration: 200ms;
  transition-property: transform;
  transition-timing-function: ease-in;
  width: 1.25rem;
`;

const ButtonLink = styled(Link)`
  color: ${color.grey.darker};
  text-decoration: none;

  &:hover {
    ${ButtonLinkIcon} {
      transform: translateX(0.5rem);
    }
  }
`;

function Button({ children, ...props }) {
  return (
    <ButtonLink {...props}>
      {children}
      <ButtonLinkIcon>
        <svg viewBox="0 0 100 100">
          <path d="M36.75 73.50L49.95 53.90L36.75 34.30L30.55 34.30L41.45 53.90L30.55 73.50ZM56.15 73.50L69.45 53.90L56.15 34.30L50.05 34.30L60.75 53.90L50.05 73.50Z"></path>
        </svg>
      </ButtonLinkIcon>
    </ButtonLink>
  );
}

export default Button;
