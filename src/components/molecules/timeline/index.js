import styled from 'styled-components';

import React from 'react';
import { Intrinsic } from '../../atoms';
import { Image } from '../../molecules';

import {
  StyledTimelineItem,
  TimelineItemImageWrapper,
  TimelineItemDetailsWrapper,
} from './styles';

export const Timeline = styled.div`
  margin-top: 2rem;
`;

export const TimelineItem = ({ fields, frontmatter }) => {
  const title = frontmatter.title.replace(/<[^>]*>?/gm, '');
  const slug = fields.slug;
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
        <div>
          <div>{date}</div>
          <h3>{title}</h3>
        </div>
      </TimelineItemDetailsWrapper>
    </StyledTimelineItem>
  );
};
