import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { stripTags } from 'src/utils/strings';
import { breakpoint } from 'src/settings';

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
      <MobileNavMenuWrapper>
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

            <ul style={{ textAlign: 'center' }}>
              {posts &&
                posts.map(({ slug, frontmatter }, index) => {
                  return (
                    <MobileNavListItem
                      key={slug}
                      $isVisible={showSocial}
                      style={{
                        animationDelay: `calc(${100 * (index + 1)}ms)`,
                        textDecoration: 'underline',
                      }}
                    >
                      <Link key={frontmatter.title} href={slug}>
                        {stripTags(frontmatter.title)}
                      </Link>
                    </MobileNavListItem>
                  );
                })}
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
      </MobileNavMenuWrapper>
    </>
  );
};
