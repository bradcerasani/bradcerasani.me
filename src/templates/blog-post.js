import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { StyledMarkdown } from '../components/markdown';

function BlogPostTemplate(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const date = post.frontmatter.date;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline={post.frontmatter.title}
      backgroundColor="hsl(0, 0%, 98%)"
      date={date}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <section>
          <StyledMarkdown dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMM YYYY")
        description
      }
    }
  }
`;
