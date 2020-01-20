import styled, { css } from 'styled-components';

const verticalOrientation = css`
  margin-left: -2rem;
  position: absolute;
  transform-origin: 100%;
  transform: rotate(-90deg) translateY(-8ch);
`;

export const Date = styled.div`
  color: hsl(0, 0%, 20%);
  font-family: Karbon;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  transform: translateZ();

  ${(props) => props.orientation === 'vertical' && verticalOrientation}
`;
