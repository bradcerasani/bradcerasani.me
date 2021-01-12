import React, { useState } from 'react';

import useInterval from 'src/hooks/use-interval';
import { StyledPostList, StyledPostItem, StyledPostItemImage } from './styles';

export const PostList = ({ posts, paused }) => {
  const [isRunning, setIsRunning] = useState(true);
  const [activePost, setActivePost] = useState(0);
  const interval = 3000;

  useInterval(
    () => {
      // Reset activePost when through list of posts, or increment activePost
      setActivePost(activePost === posts.length - 1 ? 0 : activePost + 1);
    },
    isRunning && !paused ? interval : null
  );

  return (
    <StyledPostList
      onMouseEnter={() => setIsRunning(false)}
      onMouseLeave={() => setIsRunning(true)}
    >
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title || node.fields.slug;
        const slug = node.fields.slug;
        const image = node.frontmatter.image;

        return (
          <article key={node.fields.slug}>
            <StyledPostItem
              to={slug}
              className={activePost === index ? 'js-hover' : undefined}
              onMouseEnter={() => setActivePost(index)}
            >
              <h3>{title}</h3>
              {image && <StyledPostItemImage src={image} />}
            </StyledPostItem>
          </article>
        );
      })}
    </StyledPostList>
  );
};
