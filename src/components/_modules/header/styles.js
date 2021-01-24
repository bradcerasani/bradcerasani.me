import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

export const StyledHeader = styled.header`
  margin-bottom: var(--spaceMedium);
  padding-top: 0.75rem;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    padding-top: var(--spaceMedium);
    margin-bottom: calc(
      var(--spaceMedium) - 1.25rem
    ); /* Compensate for descenders */
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: var(--spaceMedium);

  h1 br {
    display: none;
  }

  @media (min-width: ${breakpoint.sm}) {
    h1 {
      font-size: var(--fontSizeLargest);
      line-height: 1.1;
    }
  }

  @media (min-width: ${breakpoint.md}) {
    margin-top: var(--spaceDefault);
    min-height: 10.625rem; /* Maintain equal distance above/below logo */

    h1 {
      font-size: 4rem;
      margin-left: -3rem;
    }
  }

  @media (min-width: ${breakpoint.lg}) {
    h1 {
      margin-left: -4rem;
    }

    h1 br {
      display: block;
    }
  }
`;

export const Nav = styled.div`
  display: none;

  @media (min-width: ${breakpoint.md}) {
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

export const NavImage = styled.img.attrs({
  className: 'lazyload',
})`
  bottom: 0;
  display: none;
  margin-bottom: 0.375rem;
  margin-right: -1rem;
  opacity: 0;
  position: absolute;
  right: -10rem;
  transition: opacity var(--transitionFast);
  width: 10rem;
  z-index: -2;

  @media (min-width: ${breakpoint.lg}) {
    display: block;
  }
`;

export const NavItem = styled(Link)`
  display: block;
  padding-right: 0.5rem;
  text-decoration: none;

  &.is-active {
    &::after {
      content: '~';
      margin-left: 8px;
      position: absolute;
      background-repeat: no-repeat;
    }
  }

  ${({ showreturn }) =>
    showreturn &&
    css`
      &::after {
        --aspectRatio: (4 / 5);
        --height: 12px;

        background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMzcxIDE1LjM5di00LjE5NWg4LjgxM2MxLjUyMyAwIDIuODItLjUzNyAzLjg5LTEuNjExIDEuMDctMS4wNzQgMS42MDYtMi4zNyAxLjYwNi0zLjg4NSAwLTEuNTE1LS41MzUtMi44MS0xLjYwNi0zLjg4NS0xLjA3LTEuMDc0LTIuMzY3LTEuNjEtMy44OS0xLjYxaC0uMjgydjEuNzM0aC4yODJjMS4wNDYgMCAxLjkzNS4zNjcgMi42NjYgMS4xMDFhMy42MzQgMy42MzQgMCAwIDEgMS4wOTUgMi42NmMwIDEuMDQtLjM2NSAxLjkyNi0xLjA5NSAyLjY2LS43My43MzUtMS42MiAxLjEwMi0yLjY2NiAxLjEwMkg1LjM3VjUuMjY2TC4zMSAxMC4zMjhsNS4wNjIgNS4wNjN6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4K');
        background-repeat: no-repeat;
        content: '';
        height: auto;
        height: var(--height);
        position: absolute;
        width: calc(var(--height) / var(--aspectRatio));
        margin-left: 7px;
        margin-top: 9px;

        @media (prefers-color-scheme: dark) {
          filter: invert();
          opacity: 0.8;
        }
      }
    `}

  &:hover {
    ${NavImage} {
      opacity: 0.8;
      z-index: 0;
    }
  }
`;
