import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

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
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ $width }) => getResponsiveWidth($width)}

  /* Ensure height consistent with inline video */
  > img {
    height: 100%;
    object-fit: cover;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  /* stylelint-disable-next-line */
  ${({ $gutter }) => css`
    margin-left: calc(${$gutter} * -1);

    ${GridItem} {
      padding-left: calc(${$gutter});

      @media (max-width: ${breakpoint.sm}) {
        margin-bottom: calc(var(--spaceDefault) / 2);
      }
    }
  `}
`;
