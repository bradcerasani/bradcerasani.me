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
} from './mobile-overlay';

export const Header = (props) => {
  const { allMdx } = useStaticQuery(
    graphql`
      query {
        allMdx(
          filter: {
            fields: { slug: { ne: "/about/" } }
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

  const { title, date, headline = 'Design & Engineering' } = props;
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
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
        isVisible={isVisible}
        onTransitionEnd={() => {
          setOverlayTransitioned(isVisible ? true : false);
          setShowSocial(false);
        }}
      >
        <MobileNavWrapper>
          {links.map(({ to, label }, index) => (
            <MobileNavItem
              // TODO: data-visibility => isVisible now that the latest
              // version of styled-components supports shouldForwardProp
              // https://github.com/styled-components/styled-components/pull/3006
              activeClassName="is-active"
              data-visibility={overlayTransitioned.toString()}
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
              <li
                key={node.fields.slug}
                data-visibility={showSocial.toString()}
                style={{
                  animationDelay: `calc(${100 * (index + 1)}ms)`,
                  textDecoration: 'underline',
                }}
              >
                <Link key={node.frontmatter.title} to={node.fields.slug}>
                  {node.frontmatter.title.replace(/<[^>]*>?/gm, '')}
                </Link>
              </li>
            ))}
          </ul>

          <ul>
            {/* TODO: Pull from site settings? */}
            {['Twitter', 'Instagram', 'GitHub'].map((link, index) => (
              <li
                // See above re: data-visibility
                data-visibility={showSocial.toString()}
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
              </li>
            ))}
          </ul>
        </MobileNavWrapper>
      </MobileNavOverlay>

      <StyledHeader
        itemscope="itemscope"
        itemtype="https://schema.org/SiteNavigationElement"
      >
        <MobileNavMenuWrapper>
          <Logo to={`/`}>{title}</Logo>
          <MobileNavMenu
            onClick={() => setVisibility(!isVisible)}
            isActive={isVisible}
          />
        </MobileNavMenuWrapper>

        <HeroContainer>
          <h1>
            {date && <Date>{date}</Date>}
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h1>

          <Nav>
            {links.map(({ to, label, src, alt }, index) => {
              const showReturn =
                (index === 0 &&
                  window &&
                  window.location.pathname.match(/(writing|projects)/g)) ||
                undefined;

              return (
                <NavItem
                  activeClassName="is-active"
                  key={to}
                  to={to}
                  showreturn={showReturn}
                  onClick={(e) => {
                    if (showReturn) {
                      e.preventDefault();
                      window.history.back();
                    }
                  }}
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
