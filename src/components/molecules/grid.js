import styled from 'styled-components';

import { breakpoint } from '../theme';

function getResponsiveWidth(width) {
  let styles = ``;

  for (const point in width) {
    // Ensure key passed to component is a supported breakpoint
    if (breakpoint[point] !== undefined) {
      styles += `
        @media (min-width: ${breakpoint[point]}) {
          width: calc(${width[point]});
        }
      `;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`'${width[point]}' is not supported by GridItem`);
    }
  }

  return styles;
}

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const GridItem = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ width }) => getResponsiveWidth(width)}
`;
