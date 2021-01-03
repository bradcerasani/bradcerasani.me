import styled from 'styled-components';

import React from 'react';
import { Button, Intrinsic } from '../../atoms';
import { Image, LayoutObject, LayoutItem } from '../../molecules';

import {
  StyledTimelineItem,
  TimelineItemImageWrapper,
  TimelineItemDetailsWrapper,
  TimelineItemNode,
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
    <StyledTimelineItem to={slug}>
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
        <LayoutObject>
          <LayoutItem>
            <h5>{title}</h5>
          </LayoutItem>
          <LayoutItem>
            <p style={{ fontSize: '0.8rem' }}>{description}</p>
            <Button to={'/about/'}>View project</Button>
          </LayoutItem>
        </LayoutObject>
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
