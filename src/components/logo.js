import styled from 'styled-components';

const StyledLogo = styled.h2`
  font-family: var(--fontFamilySansSerif);
  font-size: var(--fontSizeSmall);
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 0;
  padding-top: 0;
  position: relative;
  z-index: 10;
`;

const StyledSpan = styled.span`
  color: var(--colorGreyLight);
  display: block;
  font-weight: 400;
`;

export const Logo = () => (
  <StyledLogo>
    Brad Cerasani
    <StyledSpan>Design &amp; Engineering</StyledSpan>
  </StyledLogo>
);
