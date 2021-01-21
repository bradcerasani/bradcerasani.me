import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const Date = styled.div`
  color: inherit;
  font-family: var(--fontFamilySansSerif);
  font-size: var(--fontSizeSmaller);
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-top: -1.75rem;
  position: absolute;
  text-transform: uppercase;

  @media (min-width: ${breakpoint.md}) {
    font-size: var(--fontSizeSmallest);
    margin-left: calc(-1 * var(--spaceDefault));
    margin-top: 0;
    transform-origin: 100%;
    transform: rotate(-90deg) translateY(-8ch);
  }
`;
