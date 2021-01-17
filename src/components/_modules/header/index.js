import React, { useState, useEffect } from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { breakpoint } from 'src/settings';
import {
  Date,
  Logo,
  MobileNavItem,
  MobileNavMenu,
  MobileNavMenuWrapper,
  MobileNavOverlay,
  MobileNavWrapper,
  Nav,
  NavImage,
  NavItem,
} from 'src/components';
import { links } from './links';
import { StyledHeader, HeroContainer } from './styles';

export const Header = (props) => {
  const { title, date, headline = 'Design & Engineering' } = props;
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const isClient = typeof window === 'object';

    // SSR will throw errors if attempting to access global window or document
    if (!isClient) {
      return false;
    }

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
              partiallyActive={
                typeof window === 'object' &&
                window.location.pathname.includes(label.toLowerCase())
              }
              style={{ animationDelay: `calc(${150 * index}ms)` }}
              to={to}
            >
              {label}
            </MobileNavItem>
          ))}

          <ul>
            {/* TODO: Pull from site settings? */}
            {['Instagram', 'Twitter', 'GitHub'].map((link, index) => (
              <li
                // See above re: data-visibility
                data-visibility={showSocial.toString()}
                key={link}
                style={{ animationDelay: `calc(${150 * (index + 1)}ms)` }}
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

      <StyledHeader>
        <MobileNavMenuWrapper>
          <Logo to={`/`}>{title}</Logo>
          <MobileNavMenu
            onClick={() => setVisibility(!isVisible)}
            isActive={isVisible}
          />
        </MobileNavMenuWrapper>

        <HeroContainer>
          <h1>
            {date && <Date orientation="vertical">{date}</Date>}
            <span dangerouslySetInnerHTML={{ __html: headline }} />
          </h1>

          <Nav>
            {links.map(({ to, label, imageSrc }) => {
              const url =
                process.env.NODE_ENV === 'development'
                  ? `/images/${imageSrc}`
                  : `https://bradcerasani.imgix.net/images/${imageSrc}`;

              return (
                <NavItem
                  activeClassName="is-active"
                  key={to}
                  partiallyActive={
                    // TODO: Tidy
                    typeof window === 'object' &&
                    window.location.pathname.includes(label.toLowerCase())
                  }
                  to={to}
                >
                  {label}
                  {imageSrc && <NavImage src={url} sizes="200px" alt={label} />}
                </NavItem>
              );
            })}
          </Nav>
        </HeroContainer>
      </StyledHeader>
    </>
  );
};
