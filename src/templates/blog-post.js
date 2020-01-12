import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

const MarkdownBody = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.5px;
    padding-top: 1rem;
  }

  p {
    line-height: 1.5;
    font-family: 'Tiempos Text', sans-serif;
  }

  blockquote {
    border-left: 3px solid currentColor;
    display: block;
    margin-left: 0;
    padding-bottom: 0.75rem;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 0.5rem;
    position: relative;

    p {
      font-size: 24px;
      line-height: 1.25;
      margin-bottom: 0;
    }
  }

  pre {
    margin-bottom: 1.5rem;
  }

  hr {
    background-color: currentColor;
    border: none;
    height: 4px;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }

  .footnotes {
    font-size: 16px;
  }

  .footnotes ol {
    padding: 0;
    margin: 0;
  }

  .footnotes ol li {
    margin-bottom: 1rem;
  }

  .footnotes p {
    display: inline;
  }

  .footnote-backref {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
  }

  .footnote-ref {
    text-decoration: none;
  }
`;

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
      backgroundColor="hsl(0, 0%, 98%)"
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <section>
          <MarkdownBody dangerouslySetInnerHTML={{ __html: post.html }} />
        </section>
      </article>
    </Layout>
  );
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 240)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
