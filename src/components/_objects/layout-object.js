import React from 'react';
import styled, { css } from 'styled-components';

import { breakpoint as breakpoints } from 'src/settings';

function getResponsiveWidth(width) {
  let styles = ``;

  for (const breakpoint in width) {
    // Ensure key passed to component is a supported breakpoint
    if (breakpoints[breakpoint] !== undefined) {
      styles += `
        @media (min-width: ${breakpoints[breakpoint]}) {
          display: block;
          width: calc(${width[breakpoint]});
        }
      `;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`'${width[breakpoint]}' is not supported by LayoutItem`);
    }
  }
  return styles;
}

export const LayoutObject = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  /* stylelint-disable-next-line */
  ${({ gutterWidth }) =>
    gutterWidth &&
    css`
      @media (min-width: ${breakpoints.sm}) {
        margin-left: calc(${gutterWidth} * -1);

        > div {
          padding-left: calc(${gutterWidth});
        }
      }
    `}
`;

export const StyledLayoutItem = styled.div`
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ width }) => getResponsiveWidth(width)}
`;

export const LayoutItem = ({ children, ...props }) => {
  return <StyledLayoutItem {...props}>{children}</StyledLayoutItem>;
};
