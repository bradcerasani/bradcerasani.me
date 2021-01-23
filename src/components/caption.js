import styled from 'styled-components';

import { breakpoint } from 'src/settings';

export const Caption = styled.figcaption`
  color: var(--colorGreyLight);
  font-size: var(--fontSizeSmall);
  font-style: italic;
  margin-bottom: var(--spaceDefault);
  margin-top: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  text-align: center;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: var(--spaceMedium);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--colorLinenDark);
  }

  /* Hack for larger emoji in video captions */
  span {
    bottom: calc(0.25rem * -1);
    display: inline-block;
    font-size: 1.5em;
    font-style: normal;
    line-height: 0.75rem;
    padding-right: 0.25rem;
    position: relative;
  }
`;
