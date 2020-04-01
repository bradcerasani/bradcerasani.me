import styled, { css } from 'styled-components';

import { font } from '../theme';

const verticalOrientation = css`
  margin-left: -2rem;
  position: absolute;
  transform: rotate(-90deg) translateY(-8ch);
  transform-origin: 100%;
`;

export const Date = styled.div`
  color: inherit;
  font-family: ${font.family.sansSerif};
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* stylelint-disable-next-line */
  ${(props) => props.orientation === 'vertical' && verticalOrientation}
`;
