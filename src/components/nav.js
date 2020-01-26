import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  margin-bottom: 1rem; /* optically align to byline baseline */
  position: relative;
`;

export const NavImage = styled.img`
  bottom: 0;
  display: block;
  margin-right: -16px;
  opacity: 0;
  position: absolute;
  right: -200px;
  width: 200px;
  z-index: -2;
`;

export const NavItem = styled(Link)`
  color: hsl(0, 0%, 20%);
  display: block;
  font-size: 20px;
  margin-right: -16px;
  margin-top: 12px;
  padding-right: 16px;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    right: -21px; /* straddle image edge */
    z-index: 1;
  }

  &.is-active {
    color: black;
    text-decoration: underline;

    &::after {
      content: '~';
    }
  }

  &:hover {
    ${NavImage} {
      opacity: 1;
      z-index: 0;
    }
  }
`;
