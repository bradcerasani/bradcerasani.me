import styled from 'styled-components';

import { breakpoint } from '../../theme';

export const StyledHeader = styled.div`
  margin-bottom: 3.5rem;
  margin-top: 4rem;

  @media (min-width: ${breakpoint.md}) {
    margin-top: 5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  min-height: 164px;
`;
