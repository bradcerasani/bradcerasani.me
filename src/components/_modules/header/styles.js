import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const StyledHeader = styled.header`
  margin-bottom: var(--spaceMedium);
  padding-top: 0.75rem;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    padding-top: var(--spaceMedium);
    margin-bottom: calc(
      var(--spaceMedium) - 1.25rem
    ); /* Compensate for descenders */
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: var(--spaceLarge);

  @media (min-width: ${breakpoint.md}) {
    margin-top: var(--spaceDefault);
    min-height: 10.625rem; /* Maintain equal distance above/below logo */
  }
`;
