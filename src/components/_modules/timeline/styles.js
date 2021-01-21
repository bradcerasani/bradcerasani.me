import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

// Exported StyledTimelineItem at bottom due to no-use-before-define
const TimelineItem = styled.div`
  --marginBottom: var(--spaceLarge);
  --nodeDiameter: 3rem;
  --nodeOffset: 1rem;
  --strokeWidth: 1px;

  margin-bottom: var(--marginBottom);
  position: relative;
`;

const TimelineStroke = css`
  background-color: var(--colorGreyLight);
  content: '';
  left: 0;
  margin-left: calc(-1 * var(--nodeOffset) - var(--nodeDiameter) / 2);
  position: absolute;
  width: var(--strokeWidth);
  z-index: 0;
  height: 100%;
`;

export const TimelineItemImageWrapper = styled.div`
  margin-bottom: var(--spaceDefault);
  position: relative;

  figure {
    overflow: hidden;
    margin: 0 !important;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before {
      ${TimelineStroke};

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

  h3 {
    display: inline-block;
    padding-top: 0.75rem;
  }

  p {
    font-size: var(--fontSizeSmall);
    margin-bottom: 1.25rem;
  }

  h3:hover {
    text-decoration: underline;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before,
    &::after {
      ${TimelineStroke};
    }

    &::after {
      bottom: calc(-1 * var(--marginBottom));
      height: calc(100% - var(--nodeDiameter) + var(--marginBottom));
    }

    &::before {
      height: var(--spaceDefault);
      top: calc(-1 * var(--spaceDefault));
    }
  }
`;

export const TimelineItemNode = styled.div`
  @media (min-width: ${breakpoint.md}) {
    align-items: center;
    border-radius: 50%;
    border: var(--strokeWidth) solid currentColor;
    display: flex;
    font-size: var(--fontSizeSmallest);
    font-variant-numeric: tabular-nums;
    height: var(--nodeDiameter);
    justify-content: center;
    left: 0;
    line-height: 1.2;
    margin-left: calc(-1 * var(--nodeOffset) - var(--nodeDiameter));
    position: absolute;
    text-align: center;
    top: 0;
    width: var(--nodeDiameter);
    box-shadow: 0 0 0 0.25rem var(--computedBackgroundColor);
    z-index: 1;
  }
`;

export const StyledTimelineItem = styled(TimelineItem)`
  /* TODO: Harden timeline start styles */

  &:first-of-type {
    ${TimelineItemImageWrapper}::before {
      height: calc(3rem + 100%);
      top: -3rem;
    }

    ${TimelineItemImageWrapper}::after {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: currentColor;
      position: absolute;
      top: -3rem;
      left: -2.875rem;
      content: '';
    }
  }
  &:last-of-type {
    ${TimelineItemDetailsWrapper}::after {
      display: none;
    }
  }
`;
