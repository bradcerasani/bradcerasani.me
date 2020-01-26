import styled from 'styled-components';

export const DemoButton = styled.a`
  background: #3ba7bb;
  border: 2px solid #3ba7bb;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 1.5rem;
  padding: 0.75rem 3rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: white;
  }

  ${(props) =>
    props.stepTwo &&
    `
    &::after {
      content: '✔';
      font-family: Arial, Helvetica, sans-serif;
      height: 1rem;
      position: absolute;
      right: 1rem;
      width: 1rem;
      top: 0.75rem;
    }
  `};

  ${(props) =>
    props.stepThree &&
    `
    &::after {
      color: #3ba7bb;
    }

    &:visited {
      background: #fafafa;
      border-color: #535353;
      color: #535353;

      &:after {
        color: #49b749;
      }
    }
  `}
`;
