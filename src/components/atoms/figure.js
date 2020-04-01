import styled, { css } from 'styled-components';

import { Caption } from './caption';

export const Figure = styled.figure`
  margin-bottom: 1.5rem;
  margin-top: 0;

  ${({ size }) => {
    switch (size) {
      case 'large':
        return css`
          margin-left: -200px;
          margin-right: -200px;
          width: calc(100% + 400px);
        `;

      case 'full':
        return css`
          /* TODO: Factor out explicit values */
          margin-left: calc((100vw - 636px) / -2);
          margin-right: calc((100vw - 636px) / -2);
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
`;
