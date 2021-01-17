import styled from 'styled-components';

export const Caption = styled.figcaption`
  color: var(--colorGreyDefault);
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  min-height: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;

  /* Hack for larger emoji in video captions */
  span {
    bottom: -0.25rem;
    display: inline-block;
    font-size: 1.5rem;
    font-style: normal;
    line-height: 1rem;
    padding-right: 0.25rem;
    position: relative;
  }
`;
