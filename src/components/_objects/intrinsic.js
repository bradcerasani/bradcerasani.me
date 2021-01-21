import React from 'react';
import styled, { css } from 'styled-components';

const StyledIntrinsic = styled.div`
  position: relative;
  width: 100%;

  ${({ aspect = '1 / 1' }) => {
    const ratioArray = aspect.split('/');

    return css`
      padding-bottom: calc(${ratioArray[1]} / ${ratioArray[0]} * 100%);
    `;
  }}

  > *,
  iframe {
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
