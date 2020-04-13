import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, color, font } from '../theme';
import { Noise, CAText, CAFilter } from '../atoms';

import MenuIconSVG from '../atoms/icons/menu.inline.svg';

export const NavInvertWrapper = styled.div`
  display: contents;
  transition-duration: 200ms;
  transition-property: color, text-shadow, filter;
  transition-timing-function: ease-in-out;

  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    ${({ invert }) =>
      invert &&
      css`
        ${CAText}
        color: ${color.white};

        a {
          z-index: 8;
        }

        svg {
          ${CAFilter}
        }
      `}
  }
`;

export const NavMenuIcon = styled(MenuIconSVG)`
  fill: currentColor;
  height: calc(12px + 2rem);
  margin-top: -2px;
  padding: 1rem;
  position: absolute;
  right: -1rem;
  -webkit-tap-highlight-color: transparent;
  top: 1rem;
  z-index: 10;

  /* Nav is always visible at larger viewports, so we can hide the icon */
  @media (min-width: ${breakpoint.sm}) {
    display: none;
  }
`;

// Nav is an overlay on small viewports, and a right-aligned stacked list on all others
export const Nav = styled.div`

  /* Nav styles between viewports differ enough to warrant a max-width media query over overrides */
  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    background-color: ${color.black};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    left: 0;
    opacity: 0;
    padding-bottom: 6rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    pointer-events: none;
    position: fixed;
    top: 0;
    transition-duration: 200ms;
    transition-property: background-color, color, opacity;
    transition-timing-function: ease-in-out;
    width: 100vw;
    will-change: background-color, color, opacity;
    z-index: 5;

    &::after {
      ${Noise}

      opacity: 0.4;
    }

    /* stylelint-disable-next-line */
    ${({ isVisible }) =>
      isVisible &&
      css`
        color: ${color.white};
        opacity: 1;
        pointer-events: auto;
      `}
  }

  @media (min-width: ${breakpoint.sm}) {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: flex-end;
    margin-bottom: 0.45rem; /* optically align to baseline of byline */
    margin-right: -0.5rem;
    position: relative;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-bottom: 0.7rem; /* optically align to baseline of byline */
  }
`;

export const NavImage = styled.img`
  display: none;

  @media (min-width: ${breakpoint.lg}) {
    bottom: 0;
    display: block;
    margin-bottom: 0.375rem;
    margin-right: -1rem;
    opacity: 0;
    position: absolute;
    right: -10rem;
    width: 10rem;
    z-index: -2;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  text-decoration: none;

  &.is-active {
    &::after {
      content: '~';
      margin-left: 1rem;
      position: absolute;
    }
  }

  /* Similar to Nav, < sm styles differ enough to warrant max-width media query */
  @media (max-width: calc(${breakpoint.sm} - 1px)) {
    font-family: ${font.family.serif};
    font-size: 2.5rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    line-height: 1.375;
    visibility: hidden;

    ${CAText} /* stylelint-disable-line */

    &:hover,
    &:active {
      color: inherit;
      text-decoration-color: inherit;
    }

    /* TODO: Update styled-components and employ shouldForwardProp to avoid this nonsense */
    ${(props) =>
      props['data-visibility'] === 'true' &&
      css`
        visibility: visible;
        animation-duration: 800ms;
        animation-fill-mode: both;
        animation-name: fadeInUp;
        animation-timing-function: ease;
      `}
    }

  @media (min-width: ${breakpoint.sm}) {
    padding-right: 0.5rem;

    &.is-active {
      &::after {
        margin-left: 8px;
      }
    }

    &:hover {
      ${NavImage} {
        opacity: 0.8;
        z-index: 0;
      }
    }
  }
`;
