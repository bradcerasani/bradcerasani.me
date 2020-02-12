import styled from 'styled-components';
import { Link } from 'gatsby';

import { Date } from '../components/atoms/date';

export const PostItemImage = styled.img`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: -200px;
  top: 0;
  width: 400px;
  z-index: 1;
`;

export const PostItem = styled(Link)`
  cursor: pointer;
  display: block;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  text-decoration: none;
  transition-duration: 400ms;
  transition-property: color;
  transition-timing-function: ease-out;

  ${Date} {
    opacity: 0;
    pointer-events: none;
  }

  h3 {
    margin: 0;
  }

  &:hover,
  &.hover {
    color: black;
    transition-duration: 80ms;

    ${Date} {
      opacity: 1;
    }

    ${PostItemImage} {
      opacity: 0.9;
    }
  }
`;

export const PostList = styled.div`
  position: relative;
  &:hover ${PostItem}:not(:hover) {
    color: rgba(0, 0, 0, 0.2);
  }
`;
