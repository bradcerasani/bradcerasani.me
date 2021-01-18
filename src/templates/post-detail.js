import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'src/templates/layout';
import { Button, Head } from 'src/components';
import 'src/css/footnotes.css';
import 'src/css/prism-theme.css';

function PostDetailTemplate(props) {
  const post = props.data.mdx;
  const siteTitle = props.data.site.siteMetadata.title;
  const date = post.frontmatter.date;
  const previous = props.data.sitePage.context.previous;
  const next = props.data.sitePage.context.next;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
      date={date}
    >
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image}
        slug={post.slug}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: var(--colorWhite);
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

export default PostDetailTemplate;

export const pageQuery = graphql`
  query PostDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      body
      frontmatter {
        title
        date(formatString: "MMM YYYY")
        description
        image
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
