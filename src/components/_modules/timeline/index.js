import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { stripTags } from 'src/utils/strings';
import { Button, Image, PostVideo, VisuallyHidden } from 'src/components';

import {
  StyledTimelineItem,
  TimelineDate,
  TimelineItemDetailsWrapper,
  TimelineItemImageWrapper,
  TimelineItemNode,
  TimelineLink,
} from './styles';

export const Timeline = styled.div`
  margin-top: var(--spaceDefault);
`;

export const TimelineItem = ({ slug, type, frontmatter }) => {
  const { cta, date, daterange, description, image, status, title, video } =
    frontmatter;

  const buttonText = cta || (type === 'POST' ? 'Read Post' : 'View Project');
  const isDraft = status === 'draft';
  const size = 'default';
  const showMedia = video || image;
  const displayTitle = stripTags(title);
  const href = !isDraft ? slug : '#';

  return (
    <StyledTimelineItem $status={status}>
      {showMedia && (
        <Link href={href} passHref>
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
        </Link>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode />

        <TimelineDate>{daterange || date.substring(0, 4)}</TimelineDate>

        <Link href={href} passHref>
          <h3>{displayTitle}</h3>
        </Link>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {(!frontmatter.skipPage || isDraft) && (
          <Link href={href} passHref legacyBehavior>
            <TimelineLink style={{ opacity: isDraft ? 0.5 : 1 }}>
              {buttonText} {!isDraft && '→'}
            </TimelineLink>
          </Link>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
