import React from 'react';
import { graphql } from 'gatsby';

import { Head, Layout } from '../components/templates';
import { FourOhFour } from '../components/organisms';

function PageNotFound(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline="Page Not Found"
    >
      <Head title="404: Page not found" />

      <FourOhFour />
    </Layout>
  );
}

export default PageNotFound;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
