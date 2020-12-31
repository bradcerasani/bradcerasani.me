import React from 'react';
import { Intrinsic } from '../../atoms';
import { Image } from '../../molecules';

import {
  StyledProjectList,
  StyledProjectItem,
  StyledProjectItemImageWrapper,
  StyledProjectItemDetailsWrapper,
} from './styles';

export const ProjectList = ({ projects }) => {
  return (
    <StyledProjectList>
      {projects.map(({ node }) => {
        const title = node.frontmatter.title.replace(/<[^>]*>?/gm, '');
        const slug = node.fields.slug;
        const image = node.frontmatter.image;
        const date = node.frontmatter.daterange || node.frontmatter.date;

        return (
          <StyledProjectItem to={slug} key={node.fields.slug}>
            <StyledProjectItemImageWrapper>
              <Intrinsic aspect="16 / 9">
                {image.includes('.jpg') ? (
                  <Image src={image} sizes="1040px" />
                ) : (
                  <video autoPlay muted loop playsInline>
                    <source src={image} />
                  </video>
                )}
              </Intrinsic>
            </StyledProjectItemImageWrapper>

            <StyledProjectItemDetailsWrapper>
              <div>
                <div>{date}</div>
                <h3>{title}</h3>
              </div>
            </StyledProjectItemDetailsWrapper>
          </StyledProjectItem>
        );
      })}
    </StyledProjectList>
  );
};
