import React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const ButtonLinkIcon = styled.span`
  display: inline-block;
  height: 0.75rem;
  left: 0.75rem;
  position: relative;
  transition-duration: var(--transitionFast);
  transition-property: transform;
  transition-timing-function: ease-in;
  width: 0.75rem;
`;

const StyledButton = styled(Link)`
  background-color: var(--colorGreyDarker);
  border-radius: var(--spaceDefault);
  color: var(--colorLinenLight);
  font-size: 0.7rem;
  line-height: 1.5;
  padding: 0.5rem var(--spaceDefault);
  transition-duration: var(--transitionFast);
  transition-property: background-color, color;
  transition-timing-function: ease-in;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    ${ButtonLinkIcon} {
      transform: translateX(0.5rem);
    }

    color: var(--colorGreyLightest);
  }

  /* TODO: Create proper variant lookup */
  ${({ variant }) =>
    variant === 'link' &&
    css`
      background-color: transparent !important;
      color: inherit !important;
      text-decoration: underline;
      text-transform: none;
      font-size: inherit;
      padding: 0;
      line-height: inherit;

      &:hover {
        color: currentColor;
      }
    `}

  @media (prefers-color-scheme: dark) {
    background-color: var(--colorLinenDark);
    color: var(--colorBlack);

    &:hover {
      background-color: var(--colorLinenLight);
      color: var(--colorBlack);
    }
  }
`;

export const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
      {props.variant === 'link' && <ButtonLinkIcon>»</ButtonLinkIcon>}
    </StyledButton>
  );
};
