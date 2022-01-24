import React from 'react';
import NextHead from 'next/head';

import { stripTags } from 'src/utils/strings';

export const Head = ({
  children,
  description,
  favicon = '⚗️',
  image,
  slug,
  title,
}) => {
  const metaTitle = stripTags(title);
  const metaDescription = description || 'Designer, engineer, etc.';
  const metaImage = image || 'brad-cerasani-office-wide.jpg';
  const metaImageUrl = `https://bradcerasani.imgix.net/images${metaImage}?w=1600`;
  const metaUrl = `https://bradcerasani.me${slug}`;

  return (
    <NextHead>
      <title>{metaTitle}</title>

      {favicon && (
        <link
          rel="icon"
          href={`data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>`}
        />
      )}

      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />

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
    </NextHead>
  );
};
