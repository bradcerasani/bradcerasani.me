import styled, { css } from 'styled-components';

export const Hamburger = styled.div`
  --size: 1.5rem;
  --thickness: 2px;
  --spacing: 0.5rem;
  --scaler: 0.9;

  align-items: center;
  cursor: pointer;
  display: flex;
  height: var(--size);
  justify-content: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  width: var(--size);

  &::before,
  &::after {
    background-color: currentColor;
    content: '';
    height: var(--thickness);
    left: 50%;
    margin-left: calc(var(--size) / -2);
    position: absolute;
    transform-origin: center;
    transition-duration: 600ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0, 0.85, 0, 1);
    width: var(--size);
    will-change: transform;
  }

  &::before {
    transform: translateY(calc(var(--spacing) / -2));
  }

  &::after {
    transform: translateY(calc(var(--spacing) / 2));
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before,
      &::after {
        transition-duration: 1000ms;
      }

      &::before {
        transform: rotate(-45deg) scaleX(var(--scaler));
      }
      &::after {
        transform: rotate(45deg) scaleX(var(--scaler));
      }
    `}
`;
