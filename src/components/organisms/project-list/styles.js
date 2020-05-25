import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint, color } from '../../theme';
import { Intrinsic } from '../../atoms';

export const StyledProjectList = styled.div``;

export const StyledProjectItemImageWrapper = styled.div`
  margin-left: -10rem;
  margin-right: -10rem;
  margin-bottom: 1.5rem;
  border: 6px double black;
  padding: 1.5rem;
`;

export const StyledProjectItemDetailsWrapper = styled.div`
  h3 {
    font-size: 1.25rem;
    text-decoration: none;
    position: relative;
  }
`;

export const StyledProjectItem = styled(Link)`
  display: block;
  margin-bottom: 6rem;
  position: relative;
  text-decoration: none;
`;
