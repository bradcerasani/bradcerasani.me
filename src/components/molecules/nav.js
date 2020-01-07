import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;
  position: relative;
`;

export const NavImage = styled.img`
  display: block;
  position: absolute;
  width: 200px;
  /* height: 200px; */
  right: -200px;
  bottom: 0;
  z-index: -2;
  margin-right: -16px;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

export const NavItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: hsla(0, 0%, 40%, 1);
  color: HSLA(43, 19%, 28%, 1);
  color: HSLA(43, 10%, 59%, 1);
  color: hsla(0, 0%, 60%, 1);
  margin-top: 12px;
  border-radius: 8px;
  padding-right: 16px;
  margin-right: -16px;

  &::after {
    position: absolute;
    content: '';
    right: -24px;
    z-index: 1;
  }

  &:first-of-type:hover::after {
    content: '🏠';
    right: -32px;
  }

  &.is-active {
    color: black;

    &::after {
      content: '~';
    }
  }

  &:hover {
    ${NavImage} {
      opacity: 1;
      transition-duration: 0ms;
      z-index: 0;
    }
  }
`;
