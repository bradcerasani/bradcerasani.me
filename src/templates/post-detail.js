import React from 'react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import styled from 'styled-components';

import Layout from 'src/templates/layout';
import { isImage, stripTags } from 'src/utils/strings';
import { Head, Header, Img, Intrinsic } from 'src/components';

const Hero = styled.div`
  animation-delay: 400ms;
  animation-duration: 1000ms;
  animation-fill-mode: both;
  animation-name: fadeIn;
  animation-timing-function: ease-out;
  filter: grayscale() brightness(0.6) opacity(0.2);
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

function PostDetailTemplate({ frontmatter, pagination, posts, slug, source }) {
  const { date, description, favicon, image, skipHero, title } = frontmatter;
  const { next, prev } = pagination;

  return (
    <>
      <Head
        title={`${title} • Brad Cerasani`}
        description={description}
        image={image}
        slug={slug}
        favicon={favicon}
      />
      <Layout>
        <Header headline={title} date={date} showReturn posts={posts} />
        {isImage(image) && !skipHero && (
          <Hero role="complementary" aria-label={`Hero photo: ${description}`}>
            <Intrinsic
              aspectRatio={{ base: '1 / 1', md: '3 / 2', lg: '16 / 9' }}
            >
              <Img
                src={image}
                alt="Hero image"
                style={{ objectFit: 'cover' }}
                sizes="100vw"
              />
            </Intrinsic>
          </Hero>
        )}

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
            {next && (
              <>
                <h6 style={{ paddingTop: '0' }}>Newer</h6>

                <Link
                  href={next.slug}
                  style={{ textDecorationColor: 'inherit' }}
                >
                  {stripTags(next.title)}
                </Link>
              </>
            )}
          </div>
          {prev && (
            <div>
              <h6 style={{ paddingTop: '0' }}>Older</h6>
              <Link href={prev.slug} style={{ textDecorationColor: 'inherit' }}>
                {stripTags(prev.title)}
              </Link>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}

export default PostDetailTemplate;
