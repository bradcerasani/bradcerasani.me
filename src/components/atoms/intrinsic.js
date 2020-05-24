import React from 'react';
import styled, { css } from 'styled-components';

import { color } from '../theme';

const StyledIntrinsic = styled.div`
  background-color: ${color.linen.default};
  position: relative;
  width: 100%;

  /* stylelint-disable-next-line */
  ${({ aspect }) => {
    let paddingBottom = '100%';

    if (aspect && aspect.includes('/')) {
      const ratioArray = aspect.split('/');

      paddingBottom = `calc(${ratioArray[1]} / ${ratioArray[0]} * 100%)`;
    }

    return css`
      padding-bottom: ${paddingBottom};
    `;
  }}

  > * {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;

export const Intrinsic = ({ aspect, children, ...props }) => {
  return (
    <StyledIntrinsic {...props} aspect={aspect}>
      {children}
    </StyledIntrinsic>
  );
};
