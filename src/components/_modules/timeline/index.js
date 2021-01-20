import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Button, Intrinsic, Image } from 'src/components';

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

  return (
    <StyledTimelineItem>
      {image && (
        <TimelineItemImageWrapper
          size={fields.type === 'WRITING' ? 'default' : 'large'}
        >
          <Intrinsic aspect="16 / 9">
            {/* TODO: Create util */}
            {/\.(gif|jpe?g|png|webp)$/i.test(image) ? (
              <Image
                src={image}
                sizes="1040px"
                alt={title}
                style={{ margin: 0 }}
              />
            ) : (
              <video
                className="lazyload"
                preload="none"
                loop
                muted
                data-autoplay
                playsInline
                src={image}
              />
            )}
          </Intrinsic>
        </TimelineItemImageWrapper>
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

        {!frontmatter.skipPage && <Button to={url}>{cta}</Button>}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
