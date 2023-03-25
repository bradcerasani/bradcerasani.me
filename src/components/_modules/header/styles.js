import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const StyledHeader = styled.header`
  margin-bottom: var(--spaceDefault);
  padding-top: 0.75rem;
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    padding-top: calc(var(--spaceMedium) + 4px);
    margin-bottom: calc(var(--spaceMedium) - 0.5rem);
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  margin-top: var(--spaceMedium);

  h1 {
    width: 100%;
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 2.5rem;
  }

  h1 br {
    display: none;
  }

  @media (min-width: ${breakpoint.sm}) {
    h1 {
      line-height: 1.1;
    }
  }

  @media (min-width: ${breakpoint.md}) {
    margin-top: var(--spaceMedium);
    margin-left: -4rem;
    margin-right: -4rem;
  }
`;
