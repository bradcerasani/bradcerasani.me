import styled, { css } from 'styled-components';

export const DemoButton = styled.a`
  background: #3ba7bb;
  border: 2px solid #3ba7bb;
  border-radius: 4px;
  color: white;
  cursor: default;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1.5rem;
  padding: 0.75rem 3rem;
  position: relative;
  text-decoration: none;

  &:hover {
    color: white;
  }

  ${(props) =>
    props.stepTwo &&
    css`
      &::after {
        content: '✓';
        font-family: Arial, Helvetica, sans-serif;
        height: 1rem;
        position: absolute;
        right: 1rem;
        width: 1rem;
        top: 0.75rem;
        font-size: 20px;
      }
    `};

  ${(props) =>
    props.stepThree &&
    css`
      cursor: pointer !important;

      &::after {
        color: #3ba7bb;
      }

      &:visited {
        background: white;
        border-color: #535353;
        color: #535353;

        &:after {
          color: #49b749;
        }
      }
    `}
`;
