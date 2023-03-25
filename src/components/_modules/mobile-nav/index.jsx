import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { stripTags } from 'src/utils/strings';
import { breakpoint } from 'src/settings';
import linkList from 'content/social/link-list.js';

const Dots = styled.div`
  border-bottom: 1px dotted var(--colorGreyLighter);
  flex-grow: 1;
  margin: 0 6px 6px;
`;

import {
  MobileNavItem,
  MobileNavMenu,
  MobileNavMenuWrapper,
  MobileNavOverlay,
  MobileNavWrapper,
  MobileNavListItem,
} from './styles';

const links = [
  {
    to: '/',
    label: 'Index',
    src: '/images/nav/index@2x.webp',
    alt: 'Homepage',
  },
  {
    to: '/about',
    label: 'About',
    src: '/images/nav/about-80s.jpg',
    alt: 'About Brad Cerasani',
  },
];

export const MobileNav = (props) => {
  const { posts } = props;
  const [isVisible, setVisibility] = useState(false);
  const [overlayTransitioned, setOverlayTransitioned] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const router = useRouter();

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
      <MobileNavMenu
        $isActive={isVisible}
        onClick={() => setVisibility(!isVisible)}
      />

      <MobileNavOverlay
        $isVisible={isVisible}
        onTransitionEnd={() => {
          setOverlayTransitioned(isVisible ? true : false);
          setShowSocial(isVisible);
        }}
      >
        <MobileNavWrapper>
          <ul>
            {posts.map(({ slug, frontmatter }, index) => {
              return (
                <MobileNavListItem
                  key={slug}
                  $isVisible={showSocial}
                  style={{
                    animationDelay: `calc(${100 * (index + 1)}ms)`,
                  }}
                >
                  <Link key={frontmatter.title} href={slug} passHref>
                    <a>
                      {stripTags(frontmatter.title)}
                      <Dots />
                      <span>{new Date(frontmatter.date).getFullYear()}</span>
                    </a>
                  </Link>
                </MobileNavListItem>
              );
            })}
          </ul>

          <ul
            style={{
              fontFamily: 'var(--fontFamilySansSerif)',
              fontSize: 'var(--fontSizeSmall)',
              color: 'var(--colorGreyDefault)',
            }}
          >
            {linkList.map(({ title, url }, index) => (
              <MobileNavListItem
                $isVisible={showSocial}
                key={title}
                style={{
                  animationDelay: `calc(${
                    posts.length * 100 + 100 * (index + 1)
                  }ms)`,
                }}
              >
                <a
                  href={url}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ display: 'block' }}
                >
                  {title}
                </a>
              </MobileNavListItem>
            ))}
          </ul>
        </MobileNavWrapper>
      </MobileNavOverlay>
    </>
  );
};

export { MobileNavMenuWrapper };
