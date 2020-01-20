import styled, { css } from 'styled-components';

const verticalOrientation = css`
  margin-left: -2rem;
  position: absolute;
  transform: rotate(-90deg) translateY(-8ch);
  transform-origin: 100%;
`;

export const Date = styled.div`
  color: inherit;
  font-family: 'Karbon', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  pointer-events: none;
  text-transform: uppercase;

  ${(props) => props.orientation === 'vertical' && verticalOrientation}
`;
