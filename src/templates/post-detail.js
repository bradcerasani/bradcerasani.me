import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { css } from 'styled-components';
import styled from 'styled-components';

import Layout from 'src/templates/layout';
import { isImage, stripTags } from 'src/util';
import { Head, Img, Intrinsic } from 'src/components';

const Hero = styled.div`
  animation-delay: 400ms;
  animation-duration: 1000ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-out;
  filter: grayscale() brightness(0.6);
  left: 0;
  mask-image: linear-gradient(black 65%, transparent 95%);
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  img {
    object-fit: cover;
  }
`;

function PostDetailTemplate({ slug, source, frontMatter }) {
  const { date, description, image, skipHero, title, favicon } = frontMatter;

  // TODO: Wire up prev/next
  const previous = null;
  const next = null;

  return (
    <Layout headline={title} date={date} showReturn>
      {isImage(image) && !skipHero && (
        <Hero role="complementary" aria-label={`Hero photo: ${description}`}>
          <Intrinsic aspectRatio={{ base: '1 / 1', md: '3 / 2', lg: '16 / 9' }}>
            <Img
              src={image}
              alt="Hero image"
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </Intrinsic>
        </Hero>
      )}

      <Head
        title={`${title} • Brad Cerasani`}
        description={description}
        image={image}
        slug={slug}
        favicon={favicon}
      />

      <style>
        {css`
          @media (prefers-color-scheme: light) {
            :root {
              --backgroundColor: hsl(39, 14%, 40%, 0.5);
              --computedBackgroundColor: hsl(43, 8%, 82%, 1);
            }
          }
        `}
      </style>

      <main>
        <article>
          <section>
            <MDXRemote {...source} />
          </section>
        </article>
      </main>

      {/* TODO: Abstract and style like DF? */}
      <section
        role="navigation"
        aria-label="Pagination Navigation"
        style={{
          marginTop: 'var(--spaceMedium)',
          paddingTop: 'var(--spaceMedium)',
          borderTop: '1px solid var(--colorFaded)',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          {next && next.frontmatter.status !== 'draft' && (
            <>
              <h6 style={{ paddingTop: '0' }}>Newer</h6>

              <Link
                href={next.fields.slug}
                style={{ textDecorationColor: 'inherit' }}
              >
                {stripTags(next.frontmatter.title)}
              </Link>
            </>
          )}
        </div>
        {previous && (
          <div>
            <h6 style={{ paddingTop: '0' }}>Older</h6>
            <Link
              href={previous.fields.slug}
              style={{ textDecorationColor: 'inherit' }}
            >
              {stripTags(previous.frontmatter.title)}
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default PostDetailTemplate;
