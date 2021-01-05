import styled from 'styled-components';

import React from 'react';
import { Button, Intrinsic } from '../../atoms';
import { Image } from '../../molecules';

import {
  StyledTimelineItem,
  TimelineItemDetailsWrapper,
  TimelineItemImageWrapper,
  TimelineItemNode,
  TimelineItemTitle,
} from './styles';

export const Timeline = styled.div`
  margin-top: 2rem;
`;

export const TimelineItem = ({ fields, frontmatter }) => {
  const title = frontmatter.title.replace(/<[^>]*>?/gm, '');
  const description = frontmatter.description;
  const image = frontmatter.image;
  const date = frontmatter.daterange || frontmatter.date;
  const cta =
    frontmatter.cta ||
    (fields.type === 'WRITING' ? 'Read Post' : 'View Project');
  const url = frontmatter.ctaUrl || fields.slug;

  return (
    <StyledTimelineItem>
      {image && (
        <TimelineItemImageWrapper
          size={fields.type === 'WRITING' ? 'default' : 'large'}
        >
          <Intrinsic aspect="16 / 9">
            {image.includes('.jpg') || image.includes('.png') ? (
              <Image src={image} sizes="1040px" />
            ) : (
              <video autoPlay muted loop playsInline>
                <source src={image} />
              </video>
            )}
          </Intrinsic>
        </TimelineItemImageWrapper>
      )}

      <TimelineItemDetailsWrapper>
        <TimelineItemNode>{date}</TimelineItemNode>

        <TimelineItemTitle to={url}>
          <h5 style={{ paddingTop: '0.75rem', display: 'inline-block' }}>
            {title}
          </h5>
        </TimelineItemTitle>

        <p
          style={{ fontSize: '0.8rem', marginBottom: '1.25rem' }}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        {!frontmatter.skipPage && (
          <Button to={url} target={frontmatter.ctaUrl ? '_blank' : '_self'}>
            {cta}
          </Button>
        )}
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
