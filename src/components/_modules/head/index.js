import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { stripTags } from 'src/util';

export const Head = ({
  title,
  description,
  image,
  children,
  slug,
  favicon = '⚗️',
  index = true,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `
  );

  const metaTitle = stripTags(title);
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.image;
  const metaImageUrl = `https://bradcerasani.imgix.net/images${metaImage}?w=1600`;
  const metaUrl = `${site.siteMetadata.siteUrl}/${slug ? slug : ''}`;

  return (
    <Helmet
      title={metaTitle}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      {favicon && (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      )}

      <meta name="robots" content={index ? 'index,follow' : 'noindex'} />
      <meta name="googlebot" content={index ? 'index,follow' : 'noindex'} />

      <link rel="canonical" href={metaUrl} />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImageUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:image" content={metaImageUrl} />
      <meta name="twitter:site:id" content="@bradcerasani" />
      <meta name="twitter:creator" content="@bradcerasani" />

      {children}
    </Helmet>
  );
};
