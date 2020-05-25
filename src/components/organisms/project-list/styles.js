import styled from 'styled-components';
import { Link } from 'gatsby';

export const StyledProjectList = styled.div``;

export const StyledProjectItemImageWrapper = styled.div`
  border: 6px double black;
  margin-bottom: 1.5rem;
  margin-left: -10rem;
  margin-right: -10rem;
  padding: 1.5rem;
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
  margin-bottom: 6rem;
  position: relative;
  text-decoration: none;
`;
