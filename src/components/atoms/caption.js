import styled from 'styled-components';

export const Caption = styled.figcaption`
  color: hsl(0, 0%, 40%);
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
