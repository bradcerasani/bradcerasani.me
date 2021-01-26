import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

// Exported StyledTimelineItem at bottom due to no-use-before-define
const TimelineItem = styled.div`
  --marginBottom: var(--spaceMedium);
  --nodeDiameter: 3rem;
  --nodeOffset: 1rem;
  --strokeWidth: 1px;

  margin-bottom: var(--marginBottom);
  position: relative;

  @media (min-width: ${breakpoint.md}) {
    --marginBottom: var(--spaceLarge);
  }
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
  position: relative;
  z-index: 1;

  figure {
    margin-bottom: 1rem;
    position: relative;
    z-index: 5;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before {
      ${TimelineStroke};

      z-index: 0;
      height: 100%;
      top: 0;
    }
  }
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
  font-size: var(--fontSizeSmaller);

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
  ${({ $status }) =>
    $status === 'draft' &&
    css`
      pointer-events: none;
    `};

  /* TODO: Harden timeline start styles */
  @media (min-width: ${breakpoint.md}) {
    &:first-of-type {
      ${TimelineItemImageWrapper}::before {
        height: calc(2.5rem + 100%);
        top: -2.5rem;
      }

      ${TimelineItemImageWrapper}::after {
        border-radius: 50%;
        border: 1px solid currentColor;
        content: '';
        height: 0.75rem;
        left: -2.875rem;
        margin-left: 1px; /* nudge to centre */
        position: absolute;
        top: -3.5rem;
        width: 0.75rem;
      }
    }

    &:last-of-type {
      ${TimelineItemDetailsWrapper}::after {
        display: none;
      }
    }
  }
`;
