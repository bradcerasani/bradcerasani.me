import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { Head, Layout } from 'src/components/templates';
import {
  FourOhFour,
  FourOhFourTheme,
  TigerBackground,
  Loading,
} from 'src/components/organisms';

function PageNotFound(props) {
  const { data } = props;
  const siteTitle = data.site.siteMetadata.title;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <Layout
      location={props.location}
      title={siteTitle}
      headline="Page Not Found"
    >
      <Head title="404: Page not found" />

      <Loading style={{ opacity: isLoaded ? 0 : 1 }} />

      <FourOhFourTheme />
      <TigerBackground />
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
