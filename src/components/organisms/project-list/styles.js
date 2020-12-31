import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from '../../theme';

export const StyledProjectList = styled.div`
  margin-top: 3rem;
`;

export const StyledProjectItemImageWrapper = styled.div`
  margin-bottom: 1.5rem;

  figure {
    margin: 0 !important;
  }

  @media (min-width: ${breakpoint.md}) {
    margin-left: -4rem;
    margin-right: -4rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-left: -10rem;
    margin-right: -10rem;
  }
`;

export const StyledProjectItemDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

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
