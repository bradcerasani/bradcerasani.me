import styled, { css } from 'styled-components';

import { breakpoint, maxWidth } from '../theme';
import { Caption } from './caption';

export const Figure = styled.figure`
  margin-bottom: 1.5rem;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  margin-top: 0;

  @media (min-width: ${breakpoint.md}) {
    margin-left: 0;
    margin-right: 0;

    ${({ size }) => {
      switch (size) {
        case 'large':
          return css`
            margin-left: -3rem;
            margin-right: -3rem;
            margin-top: 3rem;
            width: calc(100% + 6rem);
          `;

        case 'full':
          return css`
            margin-left: calc((100vw - ${maxWidth} + 3rem) / -2);
            margin-right: calc((100vw - ${maxWidth} + 3rem) / -2);
            margin-top: 3rem;
            width: 100vw;
            min-width: 100%;
            margin-top: 3rem;

            ${Caption} {
              margin-bottom: 3rem;
            }
          `;
        default:
      }
    }}
  }

  @media (min-width: ${breakpoint.lg}) {
    ${({ size }) =>
      size === 'large' &&
      css`
        margin-left: -10rem;
        margin-right: -10rem;
        margin-top: 3rem;
        width: calc(100% + 20rem);
      `}
  }
`;
