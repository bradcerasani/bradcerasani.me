import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

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
  const url = fields.slug;
  const title = frontmatter.title.replace(/<[^>]*>?/gm, '');
  const description = frontmatter.description;
  const image = frontmatter.image;
  const date = frontmatter.daterange || frontmatter.date;
  const cta =
    frontmatter.cta ||
    (fields.type === 'WRITING' ? 'Read Post' : 'View Project');
  const isDraft = frontmatter.status && frontmatter.status.includes('draft');
  const size = fields.type === 'WRITING' || isDraft ? 'default' : 'large';

  // TODO: Tidy & DRY
  return (
    <StyledTimelineItem style={{ pointerEvents: isDraft ? 'none' : null }}>
      {image && (
        <Link to={url}>
          <TimelineItemImageWrapper>
            {/* TODO: Create util */}
            {/\.(gif|jpe?g|png|webp)$/i.test(image) ? (
              <Image src={image} sizes="1040px" alt={title} size={size} />
            ) : (
              <PostVideo src={image} size={size} />
            )}
          </TimelineItemImageWrapper>
        </Link>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode>{date}</TimelineItemNode>

        <Link to={url}>
          <h3>{title}</h3>
        </Link>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {!frontmatter.skipPage && (
          <Button
            to={url}
            style={{
              opacity: isDraft ? '0.5' : '1',
            }}
          >
            {cta}
          </Button>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
