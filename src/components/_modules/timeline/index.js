import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { stripTags } from 'src/util';
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

export const TimelineItem = ({ fields, frontmatter }) => {
  const { slug, type } = fields;
  const {
    cta,
    date,
    daterange,
    description,
    image,
    status,
    title,
    video,
  } = frontmatter;

  const buttonText = cta || (type === 'WRITING' ? 'Read Post' : 'View Project');
  const isDraft = status === 'draft';
  const size = type === 'WRITING' || isDraft ? 'default' : 'large';
  const showMedia = video || image;
  const displayTitle = stripTags(title);

  return (
    <StyledTimelineItem $status={status}>
      {showMedia && (
        <Link to={slug}>
          <TimelineItemImageWrapper>
            {video ? (
              <PostVideo src={video} $size={size} />
            ) : (
              <Image
                src={image}
                sizes="1040px"
                alt={description}
                $size={size}
              />
            )}
          </TimelineItemImageWrapper>

          <VisuallyHidden>{displayTitle}</VisuallyHidden>
        </Link>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode>{daterange || date}</TimelineItemNode>

        <Link to={slug}>
          <h3>{displayTitle}</h3>
        </Link>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {(!frontmatter.skipPage || isDraft) && (
          <Button to={!isDraft ? slug : null} as={isDraft ? 'a' : null}>
            {buttonText}
          </Button>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
