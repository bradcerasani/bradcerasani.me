import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import { Head, Layout } from '../components/templates';
import { Image } from '../components/molecules';

const Hero = styled.div`
  animation-delay: 200ms;
  animation-duration: 1000ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-out;
  filter: grayscale() brightness(0.6);
  left: 0;
  mask-image: linear-gradient(black 65%, transparent 95%);
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  figure {
    margin: 0;
  }
`;

function ProjectDetailTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const image = post.frontmatter.image;

  useEffect(() => {
    const isClient = typeof window === 'object';

    if (isClient) {
      document.body.style.scrollBehavior = 'smooth';
    }
  });

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
    >
      <Hero>
        <Image src={image} />
      </Hero>

      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
      />

      <style>{css`
        :root {
          --backgroundColor: HSLA(39, 14%, 40%, 0.5);
          --computedBackgroundColor: HSLA(43, 8%, 82%, 1);
        }

        p:first-of-type {
          margin-top: 8rem;
          font-size: 1.25rem;
          font-family: 'CNW';
          font-weight: 500;
        }
      `}</style>

      <article>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
}

export default ProjectDetailTemplate;

export const pageQuery = graphql`
  query ProjectDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMM YYYY")
        description
        image
      }
    }
  }
`;
