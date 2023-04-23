import React, { useState } from 'react';
import Link from 'next/link';

import { Date as DateComponent, Glow, Logo } from 'src/components';

import { StyledHeader, HeroContainer } from './styles';
import { MobileNav, MobileNavMenuWrapper } from '../mobile-nav';

export const Header = (props) => {
  const { date, headline = null, posts = [] } = props;
  const [isVisible, setVisibility] = useState(false);

  // TODO: Create util
  const formattedDate = date
    ? new Date(date.replace(/-/g, '/'))
        .toLocaleString('en-CA', {
          year: 'numeric',
          month: 'long',
        })
        .replace('.', '')
    : null;

  return (
    <>
      <Glow />
      <StyledHeader
        itemscope="itemscope"
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <MobileNavMenuWrapper>
          <Link
            href="/"
            passHref
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            <Logo />
          </Link>

          <MobileNav
            $isActive={isVisible}
            onClick={() => setVisibility(!isVisible)}
            posts={posts}
          />
        </MobileNavMenuWrapper>

        {headline && (
          <HeroContainer>
            <h1>
              <span dangerouslySetInnerHTML={{ __html: headline }} />
              {date && <DateComponent>{formattedDate}</DateComponent>}
            </h1>
          </HeroContainer>
        )}
      </StyledHeader>
    </>
  );
};
