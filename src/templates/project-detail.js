import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import { Head, Layout } from 'src/components/templates';
import { Image } from 'src/components/molecules';
import { Button } from 'src/components/atoms';

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
  const previous = props.data.sitePage.context.previous;
  const next = props.data.sitePage.context.next;

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

        article section {
          margin-top: 12rem;
        }

        p:first-of-type {
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

      {/* TODO: Abstract and style like DF? Create util for stripping HTML or look to store at build time? */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '6rem',
        }}
      >
        <div>
          {next && (
            <>
              <h6>Newer</h6>

              <Button to={next.fields.slug} variant="link">
                {next.frontmatter.title.replace(/<[^>]*>?/gm, '')}
              </Button>
            </>
          )}
        </div>
        {previous && (
          <div>
            <h6>Older</h6>
            <Button to={previous.fields.slug} variant="link">
              {previous.frontmatter.title.replace(/<[^>]*>?/gm, '')}
            </Button>
          </div>
        )}
      </section>
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
    sitePage(context: { slug: { eq: $slug } }) {
      context {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
