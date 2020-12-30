import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from '../../theme';

export const StyledProjectList = styled.div``;

export const StyledProjectItemImageWrapper = styled.div`
  border: 6px double black;
  margin-bottom: 1.5rem;
  padding: 0.75rem;

  figure {
    margin: 0 !important;
  }

  @media (min-width: ${breakpoint.md}) {
    margin-left: -4rem;
    margin-right: -4rem;
    padding: 1.5rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-left: -10rem;
    margin-right: -10rem;
  }
`;

export const StyledProjectItemDetailsWrapper = styled.div`
  h3 {
    font-size: 1.25rem;
    position: relative;
    text-decoration: none;
  }
`;

export const StyledProjectItem = styled(Link)`
  display: block;
  margin-bottom: 3rem;
  position: relative;
  text-decoration: none;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 6rem;
  }
`;
