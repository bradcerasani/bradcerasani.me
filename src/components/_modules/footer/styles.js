import styled from 'styled-components';

export const StyledFooter = styled.footer`
  border-top: 2px solid currentColor;
  font-family: var(--fontFamilySerif);
  font-size: var(--fontSizeMedium);
  margin-top: var(--spaceMedium);
  padding-bottom: var(--spaceMedium);
  padding-top: var(--spaceMedium);

  a {
    display: inline-block;
    fill: currentColor;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    user-select: none;

    /* Hide external link glyph */
    &::after {
      display: none;
    }
  }
`;

export const ChatBubble = styled.div`
  --size: 0.7rem;

  /* Note: em units used for sizing relative to text */
  animation-duration: 400ms;
  animation-fill-mode: both;
  animation-name: fadeInUp;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  background-color: white;
  border-radius: calc(2 * var(--size));
  color: var(--colorGreyDarker);
  display: inline-block;
  font-family: var(--fontFamilySystem);
  font-size: var(--size);
  line-height: 1;
  margin-left: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.8em;
  padding-right: 0.8em;
  padding-top: 0.5em;
  position: absolute;
  text-align: center;
  white-space: nowrap;

  &::before,
  &::after {
    bottom: 0;
    content: '';
    position: absolute;
  }

  &::before {
    background-color: white;
    border-bottom-right-radius: 1em;
    height: 1em;
    left: -0.4em;
    width: 1em;
    z-index: 0;
  }

  &::after {
    background-color: var(--computedBackgroundColor);
    border-bottom-right-radius: 0.6em;
    height: 1em;
    left: -0.6em;
    width: 0.6em;
    z-index: 0;
  }
`;
