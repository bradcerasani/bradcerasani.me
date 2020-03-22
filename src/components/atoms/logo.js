import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from '../settings';

export const Logo = styled(Link)`
  font-family: Karbon, sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15em;
  line-height: 1;
  margin: 0;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 10;

  @media (min-width: ${breakpoint.sm}) {
    font-size: 20px;
  }
`;
