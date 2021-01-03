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
  const slug = fields.slug;
  const description = frontmatter.description;
  const image = frontmatter.image;
  const date = frontmatter.daterange || frontmatter.date;

  const isProject = slug.includes('/projects');

  return (
    <StyledTimelineItem>
      {isProject && (
        <TimelineItemImageWrapper>
          <Intrinsic aspect="16 / 9">
            {image.includes('.jpg') ? (
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

        <TimelineItemTitle to={slug}>
          <h5 style={{ paddingTop: '0.75rem', display: 'inline-block' }}>
            {title}
          </h5>
        </TimelineItemTitle>

        <p style={{ fontSize: '0.8rem', marginBottom: '1.25rem' }}>
          {description}
        </p>
        <Button to={slug}>{isProject ? 'View Project' : 'Read Post'}</Button>
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
