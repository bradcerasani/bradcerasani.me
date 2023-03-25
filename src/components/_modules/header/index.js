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
          month: 'short',
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
          <Link href="/" passHref>
            <a style={{ textDecoration: 'none' }}>
              <Logo />
            </a>
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
              {date && <DateComponent>{formattedDate}</DateComponent>}
              <span dangerouslySetInnerHTML={{ __html: headline }} />
            </h1>
          </HeroContainer>
        )}
      </StyledHeader>
    </>
  );
};
