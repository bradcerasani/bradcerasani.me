import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, font } from 'src/components/theme';
import { Hamburger } from 'src/components/atoms';

export const MobileNavMenuWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;

  @media (min-width: ${breakpoint.md}) {
    display: contents;
  }
`;

export const MobileNavMenu = styled(Hamburger)`
  height: 4rem;
  margin-right: -1.25rem;
  width: 4rem;

  @media (min-width: ${breakpoint.md}) {
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

  @media (min-width: ${breakpoint.md}) {
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
