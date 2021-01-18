import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from 'src/settings';

export const TimelineItemImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  transition-duration: 200ms;
  transition-property: box-shadow, transform;
  transition-timing-function: ease-in-out;
  position: relative;

  figure {
    overflow: hidden;
    margin: 0 !important;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before {
      background-color: var(--colorGreyLight);
      content: '';
      left: 0;
      margin-left: -2.75rem;
      position: absolute;
      width: 1px;
      z-index: 0;
      height: 100%;
      top: 0;
    }
  }

  ${({ size }) =>
    size === 'large' &&
    css`
      @media (min-width: ${breakpoint.md}) {
        margin-left: -4rem;
        margin-right: -4rem;
      }

      @media (min-width: ${breakpoint.lg}) {
        margin-left: -10rem;
        margin-right: -10rem;
      }

      &::before {
        display: none;
      }
    `}
`;

export const TimelineItemDetailsWrapper = styled.article`
  position: relative;

  h5:hover {
    text-decoration: underline;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before,
    &::after {
      background-color: var(--colorGreyLight);
      content: '';
      left: 0;
      margin-left: -2.75rem;
      position: absolute;
      width: 1px;
      z-index: 0;
    }

    &::after {
      bottom: -8rem;
      height: calc(100% + 5rem);
    }

    &::before {
      height: calc(1.5rem);
      top: -1.5rem;
    }
  }
`;

export const TimelineItemNode = styled.div`
  @media (min-width: ${breakpoint.md}) {
    align-items: center;
    border-radius: 1.5rem;
    border: 1px solid currentColor;
    display: flex;
    font-size: 0.6rem;
    font-variant-numeric: tabular-nums;
    height: 3rem;
    justify-content: center;
    left: 0;
    line-height: 1.2;
    margin-left: -4.25rem;
    position: absolute;
    text-align: center;
    top: 0;
    width: 3rem;
    box-shadow: 0 0 0 0.25rem var(--computedBackgroundColor);
    z-index: 1;
  }
`;

export const TimelineItemTitle = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledTimelineItem = styled.div`
  display: block;
  margin-bottom: 3rem;
  position: relative;
  text-decoration: none;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 8rem;
  }

  &:last-of-type {
    ${TimelineItemDetailsWrapper}::after {
      display: none;
    }
  }
`;
