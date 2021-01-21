import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export const Head = ({
  title,
  description,
  image,
  children,
  slug,
  favicon,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = image || site.siteMetadata.image;
  const metaImageUrl = `https://bradcerasani.imgix.net/images${metaImage}?w=1600`;
  const metaAuthor = site.siteMetadata.author;
  const metaUrl = `${site.siteMetadata.siteUrl}/${slug}`;
  const metaTwitter = site.siteMetadata.social.twitter;

  return (
    <Helmet
      title={title && title.replace(/<[^>]*>?/gm, '')}
      titleTemplate={`%s – ${site.siteMetadata.title}`}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={metaUrl} />

      {favicon && (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      )}

      <meta property="og:title" content={metaAuthor} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImageUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={metaTwitter} />
      <meta name="twitter:title" content={metaAuthor} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:url" content={metaUrl} />
      <meta name="twitter:image" content={metaImageUrl} />
      {children}
    </Helmet>
  );
};
