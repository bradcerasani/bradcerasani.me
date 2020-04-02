import styled from 'styled-components';
import { Link } from 'gatsby';

import { color, font } from '../../theme';

export const StyledPostItemImage = styled.img`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: -8rem;
  top: 0;
  transition-duration: 400ms;
  transition-timing-function: ease-out;
  width: 400px;
  z-index: 0;
`;

export const StyledPostItem = styled(Link)`
  cursor: pointer;
  display: block;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 1.75rem;
  text-decoration: none;
  transition-property: color;
  transition-timing-function: ease-in;
  z-index: 1;

  h3 {
    color: ${color.linen.dark};
    display: inline-block;
    font-family: ${font.family.sansSerif};
    font-size: 44px;
    font-weight: 400;
    letter-spacing: -0.025em;
    margin: 0;
    position: relative;
    transition-duration: 400ms;
    transition-property: color;
    transition-timing-function: ease-in-out;
    z-index: 1;
  }

  &:hover,
  &.js-hover {
    transition-duration: 100ms;

    h3 {
      color: ${color.black};
    }

    ${StyledPostItemImage} {
      opacity: 1;
      transition-delay: 200ms;
      transition-duration: 200ms;
    }
  }
`;

export const StyledPostList = styled.div`
  position: relative;

  &:hover {
    ${StyledPostItem} {
      h3,
      ${StyledPostItemImage} {
        transition-delay: 0ms;
        transition-duration: 0ms;
      }
    }
  }
`;
