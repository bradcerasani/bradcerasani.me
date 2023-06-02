import React from 'react';
import styled, { css } from 'styled-components';

const ButtonLinkIcon = styled.span`
  display: inline-block;
  height: 0.75rem;
  left: 0.75rem;
  position: relative;
  transition: transform var(--transitionSlow);
  width: 0.75rem;
`;

const StyledButton = styled.a`
  background-color: var(--colorGreyDarker);
  border-radius: var(--spaceDefault);
  color: var(--colorLinenLight);
  font-family: var(--fontFamilySansSerif), sans-serif;
  font-size: var(--fontSizeSmaller);
  line-height: 1.5;
  padding: 0.5rem var(--spaceDefault);
  text-decoration: none;
  text-transform: capitalize;
  transition: background-color, color, var(--transitionDefault);

  &:hover {
    ${ButtonLinkIcon} {
      transform: translateX(0.5rem);
      transition: transform var(--transitionFast);
    }

    color: var(--colorGreyLightest);
  }

  /* Pseudo disabled styles */
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      background-color: var(--colorLinenDark);

      @media (prefers-color-scheme: dark) {
        opacity: 0.5;
      }
    `}

  ${({ $variant }) =>
    $variant === 'link' &&
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

export const Button = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledButton ref={ref} {...props}>
      {children}
      {props.$variant === 'link' && <ButtonLinkIcon>»</ButtonLinkIcon>}
    </StyledButton>
  );
});
