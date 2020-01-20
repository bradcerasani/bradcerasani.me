import styled from 'styled-components';

export const PostItemImage = styled.img`
  display: none;
  opacity: 0.8;
  position: absolute;
  right: -200px;
  top: 0;
  width: 400px;
  z-index: -1;
`;

export const PostItemDate = styled.div`
  font-family: Karbon;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  pointer-events: none;
  position: absolute;
  text-transform: uppercase;
  top: -1rem;
`;

export const PostItem = styled.h3`
  font-size: 36px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 1.25;
  margin-bottom: 0;
  margin-top: 0;
  padding-bottom: 2.5rem;
  position: relative;
  transition-duration: 120ms;
  transition-property: color;
  transition-timing-function: ease-out;

  a {
    display: block;
    text-decoration: none;
  }

  &:hover {
    color: black;
    cursor: pointer;

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
