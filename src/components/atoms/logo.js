import styled from 'styled-components';
import { Link } from 'gatsby';

export const Logo = styled(Link)`
  color: hsl(0, 0%, 36%);
  font-family: Karbon, sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 2px;
  line-height: 1;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: hsl(0, 0%, 36%, 1);
  }
`;
