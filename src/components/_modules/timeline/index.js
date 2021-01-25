import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { isImage, stripTags } from 'src/util';
import { Button, Image, PostVideo } from 'src/components';

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
    title,
    description,
    image,
    date,
    daterange,
    cta,
    status,
  } = frontmatter;

  const buttonText = cta || (type === 'WRITING' ? 'Read Post' : 'View Project');
  const isDraft = status === 'draft';
  const size = type === 'WRITING' || isDraft ? 'default' : 'large';

  return (
    <StyledTimelineItem $status={status}>
      {image && (
        <Link to={slug}>
          <TimelineItemImageWrapper>
            {isImage(image) ? (
              <Image
                src={image}
                sizes="1040px"
                alt={stripTags(title)}
                $size={size}
              />
            ) : (
              <PostVideo src={image} $size={size} />
            )}
          </TimelineItemImageWrapper>
        </Link>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode>{daterange || date}</TimelineItemNode>

        <Link to={slug}>
          <h3>{stripTags(title)}</h3>
        </Link>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {!frontmatter.skipPage && (
          <Button to={!isDraft ? slug : null} as={!isDraft ? null : 'a'}>
            {buttonText}
          </Button>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
