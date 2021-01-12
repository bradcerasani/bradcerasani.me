import styled from 'styled-components';

import { breakpoint } from 'src/components/theme';

export const StyledHeader = styled.div`
  margin-bottom: 1.5rem;
  padding-top: 0.75rem;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 3rem;
    padding-top: 5rem;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media (min-width: ${breakpoint.md}) {
    margin-top: 3rem;
    min-height: 9rem;
  }
`;
