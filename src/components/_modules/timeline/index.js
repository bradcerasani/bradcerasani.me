import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { stripTags } from 'src/utils/strings';
import { Button, Image, PostVideo, VisuallyHidden } from 'src/components';

import {
  StyledTimelineItem,
  TimelineItemDetailsWrapper,
  TimelineItemImageWrapper,
  TimelineItemNode,
} from './styles';

export const Timeline = styled.div`
  margin-top: var(--spaceDefault);
`;

export const TimelineItem = ({ slug, type, frontmatter }) => {
  const { cta, date, daterange, description, image, status, title, video } =
    frontmatter;

  const buttonText = cta || (type === 'POST' ? 'Read Post' : 'View Project');
  const isDraft = status === 'draft';
  const size = type === 'POST' || isDraft ? 'default' : 'large';
  const showMedia = video || image;
  const displayTitle = stripTags(title);
  const href = !isDraft ? slug : '#';

  return (
    <StyledTimelineItem $status={status}>
      {showMedia && (
        <Link href={href} passHref>
          <a>
            <TimelineItemImageWrapper>
              {video ? (
                <PostVideo src={video} $size={size} />
              ) : (
                <Image
                  src={image}
                  sizes="960px"
                  alt={description}
                  $size={size}
                  width={size === 'default' ? 640 : 960}
                  height={size === 'default' ? 360 : 540}
                />
              )}
            </TimelineItemImageWrapper>

            <VisuallyHidden>Link to {displayTitle}</VisuallyHidden>
          </a>
        </Link>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode>{daterange || date.substring(0, 4)}</TimelineItemNode>

        <Link href={href} passHref>
          <a>
            <h3>{displayTitle}</h3>
          </a>
        </Link>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {(!frontmatter.skipPage || isDraft) && (
          <Link href={href} passHref>
            <Button $isDisabled={isDraft}>{buttonText}</Button>
          </Link>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
