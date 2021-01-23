import React from 'react';
import { Link, graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';

import { breakpoint } from 'src/settings';
import Layout from 'src/templates/layout';
import { Head, Img, Intrinsic } from 'src/components';
import 'src/css/footnotes.css';
import 'src/css/prism-theme.css';

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

  img {
    object-fit: cover;
  }
`;

function ProjectDetailTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const image = post.frontmatter.image;
  const previous = props.data.sitePage.context.previous;
  const next = props.data.sitePage.context.next;
  const description = post.frontmatter.description || post.excerpt;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
    >
      <Hero role="complementary" aria-label={`Hero photo: ${description}`}>
        <Intrinsic aspectRatio={{ base: '1 / 1', md: '3 / 2', lg: '16 / 9' }}>
          {/* TODO: Create util */}
          {/\.(gif|jpe?g|png|webp)$/i.test(image) && (
            <Img src={image} alt="Hero image" style={{ objectFit: 'cover' }} />
          )}
        </Intrinsic>
      </Hero>

      <Head
        title={post.frontmatter.title}
        description={description}
        image={image}
        slug={post.slug}
        favicon={post.frontmatter.favicon}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(39, 14%, 40%, 0.5);
              --computedBackgroundColor: hsl(43, 8%, 82%, 1);
            }
          }

          p:first-of-type {
            font-size: var(--fontSizeMedium);
            font-family: 'CNW';
            font-weight: 500;
          }

          @media (min-width: ${breakpoint.md}) {
            section > p:first-of-type {
              margin-bottom: var(--spaceMedium);
              margin-top: var(--spaceMedium);
            }
          }

          @media (min-width: ${breakpoint.lg}) {
            section > p:first-of-type {
              margin-bottom: var(--spaceLarge);
              margin-top: var(--spaceLarge);
            }
          }
        `}
      </style>

      <main>
        <article>
          <section>
            <MDXRenderer>{post.body}</MDXRenderer>
          </section>
        </article>
      </main>

      {/* TODO: Abstract and style like DF? Create util for stripping HTML or look to store at build time? */}
      <section
        role="navigation"
        aria-label="Pagination Navigation"
        style={{
          marginTop: 'var(--spaceMedium)',
          paddingTop: 'var(--spaceMedium)',
          borderTop: '1px solid var(--colorFaded)',
          display: 'flex',
          color: 'var(--colorGreyLight)',
          fontSize: '0.9rem',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {next && (
            <>
              <h6 style={{ paddingTop: '0' }}>Newer</h6>

              <Link
                to={next.fields.slug}
                style={{ textDecorationColor: 'inherit' }}
              >
                {next.frontmatter.title.replace(/<[^>]*>?/gm, '')}
              </Link>
            </>
          )}
        </div>
        {previous && (
          <div>
            <h6 style={{ paddingTop: '0' }}>Older</h6>
            <Link
              to={previous.fields.slug}
              style={{ textDecorationColor: 'inherit' }}
            >
              {previous.frontmatter.title.replace(/<[^>]*>?/gm, '')}
            </Link>
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
        favicon
      }
      slug
    }
    sitePage(context: { slug: { eq: $slug } }) {
      context {
        next {
          fields {
            slug
          }
          frontmatter {
            title
            status
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
            status
          }
        }
      }
    }
  }
`;
