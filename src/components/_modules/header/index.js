import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';

import { Date as DateComponent } from 'src/components';

import { StyledHeader, HeroContainer, Nav, NavImage, NavItem } from './styles';
import {
  MobileNav,
  MobileNavItem,
  MobileNavMenu,
  MobileNavMenuWrapper,
  MobileNavOverlay,
  MobileNavWrapper,
  MobileNavListItem,
} from '../mobile-nav';

const Glow = styled.div`
  --size: 1200px;

  background-image: radial-gradient(white 0%, rgba(255, 255, 255, 0) 50%);
  height: var(--size);
  left: calc(var(--size) / -2);
  position: absolute;
  top: calc(var(--size) / -2);
  width: var(--size);
  z-index: -1;
`;

export const Header = (props) => {
  // TODO: Query posts for full article index on mobile
  const allMdx = null;

  const { date, headline = null } = props;
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
      <StyledHeader
        itemscope="itemscope"
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <Link href="/" passHref>
          <div
            style={{
              marginBottom: 'var(--spaceMedium)',
              position: 'relative',
            }}
          >
            <Glow />
            <h1
              style={{
                lineHeight: '1.5',
                fontFamily: 'var(--fontFamilySansSerif)',
                fontSize: 'var(--fontSizeSmall)',
                fontWeight: 500,
              }}
            >
              Brad Cerasani
              <span
                style={{
                  color: 'var(--colorGreyLight)',
                  display: 'block',
                  fontWeight: 400,
                }}
              >
                Design &amp; Engineering
              </span>
            </h1>
          </div>
        </Link>

        <MobileNav
          onClick={() => setVisibility(!isVisible)}
          $isActive={isVisible}
        />

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
