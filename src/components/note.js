import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const Note = styled.div`
  --borderWidth: 6px;

  background-color: var(--colorGreyLightest);
  border-color: var(--colorGreyDark);
  border-radius: 1.5rem;
  border-style: double;
  border-width: var(--borderWidth);
  font-family: var(--fontFamilySansSerif);
  font-size: var(--fontSizeSmaller);
  font-style: italic;
  line-height: 1.5;
  margin-bottom: calc(var(--spaceDefault) + var(--borderWidth));
  padding: 1rem var(--spaceDefault);
  position: relative;
  top: var(--borderWidth);

  /* prevents :first-of-type treatment on project-detail */
  p {
    font: inherit !important;
    margin-bottom: 0;
  }

  /* Explicitly compensate for --borderWidth while var is out of scope */
  & + p {
    margin-top: -6px;
  }

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: calc(var(--spaceMedium) + var(--borderWidth));
  }

  @media (prefers-color-scheme: dark) {
    background-color: transparent;
  }
`;
