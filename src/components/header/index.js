import React, { Fragment, useState, useEffect } from 'react';

import { breakpoint } from '../settings';
import { Date, Headline, Logo } from '../atoms';
import { Nav, NavItem, NavImage, NavMenuIcon, NavInvertWrapper } from '../nav';

import { links } from './links';
import { StyledHeader, HeroContainer } from './styles';

function Header(props) {
  const { title, date, headline = 'Design & Engineering' } = props;
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);

  // Lock scroll when Nav overlay is visible
  document.body.style.overflow = isVisible ? 'hidden' : 'scroll';

  useEffect(() => {
    const isClient = typeof window === 'object';

    if (!isClient) {
      return false;
    }

    // Ensure Nav is hidden when viewport is larger than sm breakpoint
    function handleResize() {
      if (window.innerWidth > parseInt(breakpoint.sm)) {
        setVisibility(false);
        setOverlayTransitioned(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledHeader>
      <NavInvertWrapper invert={isVisible}>
        <Logo to={`/`}>{title}</Logo>
        <NavMenuIcon onClick={() => setVisibility(!isVisible)} />
      </NavInvertWrapper>

      <HeroContainer>
        <Headline>
          {date && <Date orientation="vertical">{date}</Date>}
          {headline}
        </Headline>

        <Nav
          isVisible={isVisible}
          onTransitionEnd={(event) =>
            event.propertyName === 'opacity' &&
            setOverlayTransitioned(isVisible ? true : false)
          }
        >
          <Fragment>
            {links.map(({ to, label, imageSrc }, index) => (
              <NavItem
                // TODO: data-visibility => isVisible now that the latest
                // version of styled-components supports shouldForwardProp
                // https://github.com/styled-components/styled-components/pull/3006
                data-visibility={overlayTransitioned.toString()}
                key={to}
                partiallyActive={to.includes('writing')}
                style={{ animationDelay: `calc(${100 * index}ms)` }}
                to={to}
              >
                {label}
                {imageSrc && <NavImage src={imageSrc} />}
              </NavItem>
            ))}
          </Fragment>
        </Nav>
      </HeroContainer>
    </StyledHeader>
  );
}

export default Header;
