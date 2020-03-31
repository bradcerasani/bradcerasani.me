import styled from 'styled-components';

import { breakpoints } from '../settings';

function getResponsiveWidth(width) {
  let styles = ``;

  for (const breakpoint in width) {
    // Ensure key passed to component is a supported breakpoint
    if (breakpoints[breakpoint] !== undefined) {
      styles += `
        @media (min-width: ${breakpoints[breakpoint]}) {
          width: calc(${width[breakpoint]});
        }
      `;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`'${width[breakpoint]}' is not supported by GridItem`);
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
