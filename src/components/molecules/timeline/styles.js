import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoint } from '../../theme';

export const TimelineItemImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  transition-duration: 200ms;
  transition-property: box-shadow, transform;
  transition-timing-function: ease-in-out;

  figure {
    margin: 0 !important;
  }

  @media (min-width: ${breakpoint.md}) {
    margin-left: -4rem;
    margin-right: -4rem;
  }

  @media (min-width: ${breakpoint.lg}) {
    margin-left: -10rem;
    margin-right: -10rem;
  }
`;

export const TimelineItemDetailsWrapper = styled.div`
  position: relative;

  h3 {
    font-size: 1.25rem;
    position: relative;
    text-decoration: none;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before,
    &::after {
      background-color: currentColor;
      content: '';
      left: 0;
      margin-left: -2.75rem;
      position: absolute;
      width: 1px;
      z-index: 0;
    }

    &::after {
      bottom: -6rem;
      height: calc(100% + 3rem);
    }

    &::before {
      height: 1.5rem;
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
  }
`;

export const StyledTimelineItem = styled(Link)`
  display: block;
  margin-bottom: 3rem;
  position: relative;
  text-decoration: none;

  @media (min-width: ${breakpoint.md}) {
    margin-bottom: 6rem;
  }

  &:last-of-type {
    ${TimelineItemDetailsWrapper}::after {
      display: none;
    }
  }
`;
