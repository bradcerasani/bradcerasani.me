import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from 'src/settings';

export const StyledPostItemImage = styled.img`
  --width: 200px;

  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition-duration: 400ms;
  transition-timing-function: ease-out;
  width: var(--width);
  z-index: 0;

  @media (min-width: ${breakpoint.lg}) {
    --width: 400px;

    right: -6rem;
    top: 0.5rem;
  }
`;

export const StyledPostItem = styled(Link)`
  cursor: pointer;
  display: block;
  margin-bottom: 1.5rem;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  transition-property: color;
  transition-timing-function: ease-in;
  z-index: 1;

  h3 {
    color: var(--colorLinen);
    margin: 0;
    position: relative;
    transition-duration: 400ms;
    transition-property: color;
    transition-timing-function: ease-in-out;
    z-index: 1;
  }

  &.js-hover {
    transition-duration: 100ms;

    h3 {
      color: var(--colorBlack);
    }

    ${StyledPostItemImage} {
      opacity: 0.2;
      transition-delay: 300ms;
      transition-duration: 200ms;

      @media (min-width: ${breakpoint.lg}) {
        opacity: 1;
      }
    }
  }

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 2rem;
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
