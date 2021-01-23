import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';
import { Caption } from 'src/components';

export const Figure = styled.figure`
  margin-bottom: var(--spaceDefault);
  margin-left: calc(-1 * var(--gutter));
  margin-right: calc(-1 * var(--gutter));
  margin-top: calc(2 * var(--spaceDefault));

  @media (min-width: ${breakpoint.md}) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;

    ${({ size }) => {
      switch (size) {
        case 'full':
          return css`
            margin-top: var(--spaceMedium);
            margin-left: calc(
              (100vw - var(--maxWidth) + var(--gutter) * 2) / -2
            );
            margin-right: calc(
              (100vw - var(--maxWidth) + var(--gutter) * 2) / -2
            );
            width: 100vw;
            min-width: 100%;

            ${Caption} {
              margin-bottom: var(--spaceMedium);
            }
          `;

        case 'large':
          return css`
            margin-bottom: var(--spaceMedium);
            margin-top: var(--spaceMedium);
            margin-left: calc(-1 * var(--spaceLarge));
            margin-right: calc(-1 * var(--spaceLarge));
          `;

        default:
          return;
      }
    }}
  }
`;
