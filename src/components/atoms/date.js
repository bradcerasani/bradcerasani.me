import styled, { css } from 'styled-components';

import { breakpoint, font } from '../theme';

const verticalOrientation = css`
  margin-top: -1.75rem;
  position: absolute;

  @media (min-width: ${breakpoint.lg}) {
    margin-left: -2rem;
    margin-top: 0;
    transform: rotate(-90deg) translateY(-8ch);
    transform-origin: 100%;
  }
`;

export const Date = styled.div`
  color: inherit;
  font-family: ${font.family.sansSerif};
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  /* stylelint-disable-next-line */
  ${(props) => props.orientation === 'vertical' && verticalOrientation}

  @media(min-width: ${breakpoint.lg}) {
    font-size: 0.6rem;
  }
`;
