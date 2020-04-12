import styled from 'styled-components';

import { breakpoint } from '../../theme';

export const StyledHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-top: 1.5rem;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 3.5rem;
    padding-top: 5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media (min-width: ${breakpoint.md}) {
    margin-top: 4rem;
    min-height: 9rem;
  }
`;
