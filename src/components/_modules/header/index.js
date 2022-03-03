import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { breakpoint } from 'src/settings';
import { stripTags } from 'src/utils/strings';
import { Date as DateComponent, Logo } from 'src/components';
import { links } from './links';
import { StyledHeader, HeroContainer, Nav, NavImage, NavItem } from './styles';
import {
  MobileNavItem,
  MobileNavMenu,
  MobileNavMenuWrapper,
  MobileNavOverlay,
  MobileNavWrapper,
  MobileNavListItem,
} from './mobile-overlay';

export const Header = (props) => {
  // TODO: Query posts for full article index on mobile
  const allMdx = null;

  const { date, headline = 'Design & Engineering' } = props;
  const [mounted, setMounted] = useState(false);
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const router = useRouter();

  // TODO: Create util
  const formattedDate = date
    ? new Date(date.replace(/-/g, '/'))
        .toLocaleString('en-CA', {
          year: 'numeric',
          month: 'short',
        })
        .replace('.', '')
    : null;

  useEffect(() => {
    setMounted(true);

    // Lock scroll when Nav overlay is visible
    document.body.style.overflow = isVisible ? 'hidden' : 'scroll';

    // Ensure Nav is hidden when viewport is larger than sm breakpoint
    function handleResize() {
      if (window.innerWidth > parseInt(breakpoint.sm)) {
        setVisibility(false);
        setOverlayTransitioned(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isVisible]);

  return (
    <>
      {mounted && (
        <MobileNavOverlay
          $isVisible={isVisible}
          onTransitionEnd={() => {
            setOverlayTransitioned(isVisible ? true : false);
            setShowSocial(isVisible);
          }}
        >
          <MobileNavWrapper>
            {links.map(({ to, label }, index) => (
              <Link href={to} key={to} passHref>
                <MobileNavItem
                  $isActive={router.pathname === to ? 'is-active' : ''}
                  $isVisible={overlayTransitioned}
                  onAnimationStart={() =>
                    setShowSocial(index === links.length - 1)
                  }
                  style={{ animationDelay: `calc(${100 * index}ms)` }}
                >
                  {label}
                </MobileNavItem>
              </Link>
            ))}

            <ul>
              {allMdx &&
                allMdx.edges.map(({ node }, index) => (
                  <MobileNavListItem
                    key={node.fields.slug}
                    $isVisible={showSocial}
                    style={{
                      animationDelay: `calc(${100 * (index + 1)}ms)`,
                      textDecoration: 'underline',
                    }}
                  >
                    <Link key={node.frontmatter.title} href={node.fields.slug}>
                      {stripTags(node.frontmatter.title)}
                    </Link>
                  </MobileNavListItem>
                ))}
            </ul>

            <ul>
              {['Twitter', 'Instagram', 'GitHub'].map((link, index) => (
                <MobileNavListItem
                  $isVisible={showSocial}
                  key={link}
                  style={{
                    animationDelay: `calc(${100 * (index + 1)}ms)`,
                  }}
                >
                  <a
                    href={`https://${link.toLowerCase()}.com/bradcerasani`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {link}
                  </a>
                </MobileNavListItem>
              ))}
            </ul>
          </MobileNavWrapper>
        </MobileNavOverlay>
      )}

      <StyledHeader
        itemscope="itemscope"
        itemtype="https://schema.org/SiteNavigationElement"
      >
        {mounted && (
          <MobileNavMenuWrapper>
            <Link href="/" passHref>
              <Logo>Brad Cerasani</Logo>
            </Link>
            <MobileNavMenu
              onClick={() => setVisibility(!isVisible)}
              $isActive={isVisible}
            />
          </MobileNavMenuWrapper>
        )}

        <HeroContainer>
          <h1>
            {date && <DateComponent>{formattedDate}</DateComponent>}
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h1>

          <Nav>
            {links.map(({ to, label, src, alt }, index) => {
              return (
                <Link href={to} key={to} passHref>
                  <NavItem
                    $isActive={router.pathname === to ? 'is-active' : ''}
                    $showReturn={index === 0 && props.showReturn}
                  >
                    {label}
                    {mounted && <NavImage src={src} alt={alt} />}
                  </NavItem>
                </Link>
              );
            })}
          </Nav>
        </HeroContainer>
      </StyledHeader>
    </>
  );
};
