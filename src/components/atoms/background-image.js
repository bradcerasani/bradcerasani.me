import styled from 'styled-components';

export const BackgroundImage = styled.div`
  animation-delay: 400ms;
  animation-duration: 800ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-in-out;
  background-image: url('/images/brad-cerasani-office-wide.jpg');
  background-position: center bottom;
  background-size: cover;
  display: block;
  height: 62.5vw;
  position: relative;
  width: 100vw;
  z-index: -1;

  &::after {
    background-image: linear-gradient(
      180deg,
      hsl(35, 30%, 86%, 1) 0%,
      hsl(35, 30%, 86%, 0.6) 50%,
      hsl(35, 30%, 86%, 0.2) 100%
    );
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
