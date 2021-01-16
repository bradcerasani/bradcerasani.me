import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from 'src/components/theme';

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

export const NavImage = styled.img`
  bottom: 0;
  display: none;
  margin-bottom: 0.375rem;
  margin-right: -1rem;
  opacity: 0;
  position: absolute;
  right: -10rem;
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
    }
  }

  &:hover {
    ${NavImage} {
      opacity: 0.8;
      z-index: 0;
    }
  }
`;
