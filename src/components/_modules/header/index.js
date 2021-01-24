import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { breakpoint } from 'src/settings';
import { Date, Logo } from 'src/components';
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
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            frontmatter: { status: { ne: "draft" }, skipPage: { ne: true } }
          }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date(formatString: "YYYY")
                status
                title
              }
            }
          }
        }
      }
    `
  );

  const { date, headline = 'Design & Engineering' } = props;
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [isDetailPage, setIsDetailPage] = useState(false);

  useEffect(() => {
    // TODO: Infer from props
    setIsDetailPage(window.location.pathname.match(/(writing|projects)/g));

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
      <MobileNavOverlay
        $isVisible={isVisible}
        onTransitionEnd={() => {
          setOverlayTransitioned(isVisible ? true : false);
          setShowSocial(false);
        }}
      >
        <MobileNavWrapper>
          {links.map(({ to, label }, index) => (
            <MobileNavItem
              activeClassName="is-active"
              $isVisible={overlayTransitioned}
              key={to}
              onAnimationStart={() => setShowSocial(index === links.length - 1)}
              style={{ animationDelay: `calc(${100 * index}ms)` }}
              to={to}
            >
              {label}
            </MobileNavItem>
          ))}

          <ul>
            {allMdx.edges.map(({ node }, index) => (
              <MobileNavListItem
                key={node.fields.slug}
                $isVisible={showSocial}
                style={{
                  animationDelay: `calc(${100 * (index + 1)}ms)`,
                  textDecoration: 'underline',
                }}
              >
                <Link key={node.frontmatter.title} to={node.fields.slug}>
                  {node.frontmatter.title.replace(/<[^>]*>?/gm, '')}
                </Link>
              </MobileNavListItem>
            ))}
          </ul>

          <ul>
            {/* TODO: Pull from site settings? */}
            {['Twitter', 'Instagram', 'GitHub'].map((link, index) => (
              <MobileNavListItem
                $isVisible={showSocial}
                key={link}
                style={{
                  animationDelay: `calc(${
                    100 * (allMdx.edges.length + index + 1)
                  }ms)`,
                }}
              >
                <OutboundLink
                  href={`https://${link.toLowerCase()}.com/bradcerasani`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link}
                </OutboundLink>
              </MobileNavListItem>
            ))}
          </ul>
        </MobileNavWrapper>
      </MobileNavOverlay>

      <StyledHeader
        itemscope="itemscope"
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <MobileNavMenuWrapper>
          <Logo to={`/`}>Brad Cerasani</Logo>
          <MobileNavMenu
            onClick={() => setVisibility(!isVisible)}
            $isActive={isVisible}
          />
        </MobileNavMenuWrapper>

        <HeroContainer>
          <h1>
            {date && <Date>{date}</Date>}
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h1>

          <Nav>
            {links.map(({ to, label, src, alt }, index) => {
              const showReturn = (isDetailPage && index === 0) || undefined;
              return (
                <NavItem
                  activeClassName="is-active"
                  key={to}
                  to={to}
                  $showReturn={showReturn}
                >
                  {label}
                  <NavImage src={src} alt={alt} />
                </NavItem>
              );
            })}
          </Nav>
        </HeroContainer>
      </StyledHeader>
    </>
  );
};
