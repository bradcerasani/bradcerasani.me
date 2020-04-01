import styled from 'styled-components';

import { breakpoints } from '../../theme';

export const StyledHeader = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;

  @media (min-width: ${breakpoints.md}) {
    margin-top: 5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  min-height: 164px;
`;
