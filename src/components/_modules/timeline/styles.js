import styled, { css } from 'styled-components';

import { breakpoint } from 'src/settings';

const TimelineItem = styled.div`
  --marginBottom: var(--spaceMedium);
  --nodeDiameter: 0.75rem;
  --nodeOffset: 2rem;
  --strokeWidth: 1px;
  --timelineColor: var(--colorGreyLighter);
  --timelineNodeColor: var(--colorGreyLight);

  font-family: var(--fontFamilySansSerif);
  margin-bottom: var(--marginBottom);
  position: relative;
`;

const TimelineStroke = css`
  background-color: var(--timelineColor);
  content: '';
  height: 100%;
  left: 0;
  margin-left: calc(-1 * var(--nodeOffset) - var(--nodeDiameter) / 2);
  position: absolute;
  width: var(--strokeWidth);
  z-index: 0;
`;

export const TimelineItemImageWrapper = styled.div`
  position: relative;
  z-index: 1;

  figure {
    aspect-ratio: 16/9;
    box-shadow: var(--boxShadow);
    margin-bottom: 1rem;
    position: relative;
    z-index: 5;
  }

  @media (min-width: ${breakpoint.md}) {
    &::before {
      ${TimelineStroke};

      z-index: 0;
      height: calc(100% + 2.75rem);
      top: 0;
    }
  }
`;

export const TimelineItemDetailsWrapper = styled.article`
  position: relative;

  h3 {
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.75rem;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: var(--fontSizeSmall);
    margin-bottom: 0;
    color: var(--colorGreyLight);
  }

  @media (min-width: ${breakpoint.md}) {
    &::after {
      ${TimelineStroke};
    }

    &::after {
      bottom: calc(-1 * var(--marginBottom));
      height: calc(
        100% - var(--nodeDiameter) + var(--marginBottom) + var(--nodeDiameter)
      );
    }
  }
`;

export const TimelineItemNode = styled.div`
  font-size: var(--fontSizeSmaller);

  @media (min-width: ${breakpoint.md}) {
    align-items: center;
    background-color: var(--colorWhite);
    border-radius: 50%;
    border: var(--strokeWidth) solid var(--timelineNodeColor);
    box-shadow: 0 0 0 0.25rem var(--computedBackgroundColor);
    display: flex;
    font-size: 10px;
    font-size: var(--fontSizeSmallest);
    font-variant-numeric: tabular-nums;
    font-weight: 600;
    height: var(--nodeDiameter);
    justify-content: center;
    left: 0;
    line-height: 1.2;
    margin-left: calc(-1 * var(--nodeOffset) - var(--nodeDiameter));
    position: absolute;
    text-align: center;
    top: 1rem;
    width: var(--nodeDiameter);
    z-index: 1;
  }
`;

export const StyledTimelineItem = styled(TimelineItem)`
  ${({ $status }) =>
    $status === 'draft' &&
    css`
      pointer-events: none;
    `};

  &:first-of-type {
    figure {
      margin-top: 0;
    }
  }

  /* TODO: Harden timeline start styles */
  @media (min-width: ${breakpoint.md}) {
    &:first-of-type {
      ${TimelineItemImageWrapper}::before {
        display: none;
      }

      ${TimelineItemDetailsWrapper}::after {
        top: 1rem;
      }
    }

    &:last-of-type {
      ${TimelineItemDetailsWrapper}::after {
        display: none;
      }
    }
  }
`;

export const TimelineDate = styled.div`
  color: var(--colorGreyLight);
  font-size: var(--fontSizeSmaller);

  @media (min-width: ${breakpoint.md}) {
    padding-top: calc(var(--nodeDiameter) + 2px);
  }

  @media (min-width: ${breakpoint.lg}) {
    display: block;
    left: -8.75rem;
    line-height: 1;
    height: var(--nodeDiameter);
    padding-top: 0;
    position: absolute;
    text-align: right;
    top: calc(1rem + 1px);
    white-space: nowrap;
    width: 4rem;
  }
`;

export const TimelineLink = styled.a`
  color: var(--colorGreyDefault);
  font-size: var(--fontSizeSmaller);
  line-height: 1;
  text-decoration: none;
`;
