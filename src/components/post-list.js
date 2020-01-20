import styled from 'styled-components';
import { Link } from 'gatsby';

export const PostItemImage = styled.img`
  display: none;
  opacity: 0.8;
  position: absolute;
  right: -200px;
  top: 0;
  width: 400px;
  z-index: -1;
`;

export const PostItem = styled(Link)`
  display: block;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 1.25rem;
  padding-top: 1.25rem;
  position: relative;
  text-decoration: none;
  transition-duration: 400ms;
  transition-property: color;
  transition-timing-function: ease-out;

  h3 {
    margin: 0;
  }

  &:hover {
    color: black;
    cursor: pointer;
    transition-duration: 80ms;

    ${PostItemImage} {
      display: block;
    }
  }
`;

export const PostList = styled.div`
  &:hover ${PostItem}:not(:hover) {
    color: rgba(0, 0, 0, 0.2);
  }
`;
