import styled, { css } from 'styled-components';

// TODO: normalize with Image component

export const FluidWrapper = styled.div`
  background-color: #85a19f;
  margin-bottom: 0.75rem;
  padding-bottom: 56.25%;
  position: relative;
  width: 100%;

  &::after {
    background-image: url('/images/loading.gif');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 240px 240px;
    content: '';
    font-size: 64px;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0;
  }

  iframe {
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition-delay: 100ms;
    transition-duration: 400ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    width: 100%;
    will-change: opacity;
    z-index: 1;
  }

  /* stylelint-disable-next-line */
  ${({ isLoaded }) =>
    isLoaded &&
    css`
      iframe {
        opacity: 1;
      }
    `}
`;

// TODO: Atomize
export const Caption = styled.figcaption`
  color: hsl(0, 0%, 40%);
  font-size: 15px;
  font-style: italic;
  margin-bottom: 3rem;
  min-height: 22px;
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

export const Figure = styled.figure`
  display: block;
  margin: 0;
  margin-bottom: 1.5rem;

  ${(props) =>
    props.size === 'large' &&
    css`
      margin-left: -200px;
      margin-right: -200px;
      width: calc(100% + 400px);
    `}

  ${(props) =>
    props.size === 'full' &&
    css`
      margin-left: calc((100vw - 636px) / -2);
      margin-right: calc((100vw - 636px) / -2);
      width: 100vw;
      min-width: 100%;
      margin-top: 3rem;

      ${Caption} {
        margin-bottom: 3rem;
      }
    `}
`;
