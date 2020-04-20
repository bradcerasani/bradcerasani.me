import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, font } from '../../theme';
import MenuIconSVG from '../../atoms/icons/menu.inline.svg';

export const MobileNavMenu = styled(MenuIconSVG)`
  cursor: pointer;
  fill: currentColor;
  height: calc(12px + 2rem);
  margin-top: -2px;
  padding: 1rem;
  position: absolute;
  right: -1rem;
  -webkit-tap-highlight-color: transparent;
  top: 1rem;
  z-index: 10;

  @media (min-width: ${breakpoint.sm}) {
    display: none;
  }
`;

export const MobileNavWrapper = styled.div`
  opacity: 0;
  transition-duration: 200ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: 100%;
  z-index: 1;

  ul {
    bottom: -3rem;
    display: block;
    position: relative;

    li {
      font-size: 1.25rem;
      opacity: 0;

      &[data-visibility='true'] {
        animation-duration: 800ms;
        animation-fill-mode: both;
        animation-name: fadeInUp;
        animation-timing-function: ease;
        visibility: visible;
      }
    }

    a {
      text-decoration: none;
    }
  }
`;

export const MobileNavOverlay = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  height: 100%;
  left: 0;
  opacity: 0;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition-delay: 200ms;
  transition-duration: 200ms;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  width: 100%;
  will-change: opacity;
  z-index: 5;

  &::before {
    background-color: var(--backgroundColor);
    content: '';
    height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* stylelint-disable-next-line */
  ${({ isVisible }) =>
    isVisible &&
    css`
      transition-delay: 0ms;
      opacity: 1;
      pointer-events: auto;

      ${MobileNavWrapper} {
        opacity: 1;
      }
    `}

  @media (min-width: ${breakpoint.sm}) {
    display: none;
  }
`;

export const MobileNavItem = styled(Link)`
  display: block;
  font-family: ${font.family.serif};
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.375;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  visibility: hidden;

  &.is-active {
    &::after {
      content: '~';
      margin-left: 1rem;
      position: absolute;
    }
  }

  &[data-visibility='true'] {
    animation-duration: 800ms;
    animation-fill-mode: both;
    animation-name: fadeInUp;
    animation-timing-function: ease;
    visibility: visible;
  }
`;
