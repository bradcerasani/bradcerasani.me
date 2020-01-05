import styled from 'styled-components';
import { Link } from 'gatsby';

export const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 8px;
`;

export const NavItem = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 24px;
  color: hsla(0, 0%, 40%, 1);
  color: HSLA(43, 19%, 28%, 1);
  color: HSLA(43, 10%, 59%, 1);
  margin-top: 12px;
  border-radius: 8px;
  position: relative;

  &:first-of-type {
    /* color: orange; */
    color: HSLA(199, 85%, 29%, 1);
    color: HSLA(214, 86%, 42%, 1);
    color: HSLA(43, 19%, 28%, 1);

    &::after {
      position: absolute;
      content: '◝';
      font-size: 32px;
      /* top: -2px; */
      bottom: -17px;
      right: -24px;
      /* color: black; */
    }
  }
`;
