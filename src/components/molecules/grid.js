import styled, { css } from 'styled-components';

import { breakpoint } from 'src/components/theme';

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
    } else if (point === 'base') {
      styles += `width: calc(${width[point]});`;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`'${width[point]}' is not supported by GridItem`);
    }
  }

  return styles;
}

export const GridItem = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ width }) => getResponsiveWidth(width)}
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  /* stylelint-disable-next-line */
  ${({ gutter }) => css`
    margin-left: calc(${gutter} * -1);

    ${GridItem} {
      padding-left: calc(${gutter});
    }
  `}
`;
