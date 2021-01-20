import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const Note = styled.div`
  background-color: var(--colorHighlight);
  border-color: currentColor;
  border-style: double;
  border-width: 6px;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: var(--spaceDefault);
  padding: var(--spaceDefault);

  p {
    /* prevents :first-of-type treatment on project-detail */
    font: inherit !important;
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: 0.8rem;
    margin-bottom: var(--spaceMedium);
  }

  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;
