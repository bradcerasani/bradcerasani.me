import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/organisms/seo';

function AboutPage(props) {
  const post = props.data.markdownRemark;
  const siteTitle = props.data.site.siteMetadata.title;
  const backgroundColor = props.data.markdownRemark.frontmatter.backgroundColor;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      backgroundColor={backgroundColor}
    >
      <SEO title={siteTitle} description="TODO" />
      <section>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query ContentBySlug {
    site {
      siteMetadata {
        title
      }
    }
    # TODO: add dynamic filename-based(?) content lookup
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      id
      html
      frontmatter {
        backgroundColor
      }
    }
  }
`;
