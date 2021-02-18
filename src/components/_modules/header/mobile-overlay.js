import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

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

export const MobileNavWrapper = styled.div`
  opacity: 0;
  transition: opacity var(--transitionDefault);
  width: 100%;
  z-index: 1;

  ul {
    display: block;
    margin-top: var(--spaceDefault);
    position: relative;

    a {
      text-decoration: none;
    }
  }
`;

export const MobileNavListItem = styled.li`
  font-size: var(--fontSizeMedium);
  opacity: 0;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation-duration: 800ms;
      animation-fill-mode: both;
      animation-name: fadeInUp;
      animation-timing-function: ease;
      visibility: visible;
    `};
`;

export const MobileNavOverlay = styled.div`
  background-color: white;
  min-height: 100%;
  left: 0;
  opacity: 0;
  padding-left: var(--spaceDefault);
  padding-right: var(--spaceDefault);
  padding-top: 5rem;
  pointer-events: none;
  position: fixed;
  top: 0;
  transition-delay: 200ms;
  transition: opacity var(--transitionDefault);
  width: 100%;
  will-change: opacity;
  z-index: 5;

  &::before {
    background-color: var(--backgroundColor);
    content: '';
    min-height: 100%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /* stylelint-disable-next-line */
  ${({ $isVisible }) =>
    $isVisible &&
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
  font-family: var(--fontFamilySerif);
  font-size: var(--fontSizeLarger);
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

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      animation-duration: 800ms;
      animation-fill-mode: both;
      animation-name: fadeInUp;
      animation-timing-function: ease;
      visibility: visible;
    `}
`;

export const MobileNavMenu = styled.div`
  --size: var(--spaceDefault);
  --thickness: 2px;
  --spacing: 0.5rem;
  --scalar: 0.9;

  align-items: center;
  cursor: pointer;
  display: flex;
  height: 4rem;
  justify-content: center;
  margin-right: -1.25rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  width: 4rem;

  @media (min-width: ${breakpoint.md}) {
    display: none;
  }

  &::before,
  &::after {
    background-color: currentColor;
    content: '';
    height: var(--thickness);
    left: 50%;
    margin-left: calc(var(--size) / -2);
    position: absolute;
    transform-origin: center;
    transition-duration: 600ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0.85, 0, 1);
    width: var(--size);
    will-change: transform;
  }

  &::before {
    transform: translateY(calc(var(--spacing) / -2));
  }

  &::after {
    transform: translateY(calc(var(--spacing) / 2));
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::before,
      &::after {
        transition-duration: 1000ms;
      }

      &::before {
        transform: rotate(-45deg) scaleX(var(--scalar));
      }
      &::after {
        transform: rotate(45deg) scaleX(var(--scalar));
      }
    `}
`;
