import styled from 'styled-components';

import { color } from '../theme';

export const Caption = styled.figcaption`
  color: ${color.grey.default};
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 3rem;
  min-height: 1.5rem;
  text-align: center;

  /* Hack for larger emoji in video captions */
  span {
    bottom: -3px;
    display: inline-block;
    font-size: 24px;
    font-style: normal;
    line-height: 15px;
    padding-right: 4px;
    position: relative;
  }
`;
