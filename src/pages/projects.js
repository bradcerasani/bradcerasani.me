import React from 'react';
import { graphql } from 'gatsby';
import { css } from 'styled-components';

import { Head, Layout } from '../components/templates';
import { ProjectList } from '../components/organisms';

function ProjectsPage(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  const projects = data.allMdx.edges;

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <Head title="Projects" />

        <style>{css`
          :root {
            --backgroundColor: HSLA(39, 14%, 40%, 0.5);
            --computedBackgroundColor: HSLA(43, 8%, 82%, 1);
          }
        `}</style>

        <ProjectList projects={projects} />
      </Layout>
    </>
  );
}

export default ProjectsPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { fields: { slug: { glob: "/projects/*" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            description
            image
            daterange
          }
        }
      }
    }
  }
`;
