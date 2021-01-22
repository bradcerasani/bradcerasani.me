import styled from 'styled-components';

import { breakpoint } from 'src/settings';

// TODO: Create util to use w/Grid too
function getResponsivePadding(settings) {
  let styles = ``;

  for (const point in settings) {
    const ratioArray = settings[point].split('/') || [1, 1];
    // Ensure key passed to component is a supported breakpoint
    if (breakpoint[point] !== undefined) {
      styles += `
        @media (min-width: ${breakpoint[point]}) {
          padding-bottom: calc(${ratioArray[1]} / ${ratioArray[0]} * 100%);
        }
      `;
    } else if (point === 'base') {
      styles += `padding-bottom: calc(${ratioArray[1]} / ${ratioArray[0]} * 100%);`;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`'${settings[point]}' is not supported by Intrinsic`);
    }
  }

  return styles;
}

export const Intrinsic = styled.div`
  position: relative;
  width: 100%;

  ${({ aspectRatio }) => getResponsivePadding(aspectRatio)}

  > *,
  iframe {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
