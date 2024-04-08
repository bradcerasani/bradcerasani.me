import { useEffect, useState } from 'react';
import { BREAKPOINTS } from 'src/constants';
import type { EntryEssential } from 'src/types';
import { formatYear, stripTags } from 'src/utils';
import './MobileNav.css';

interface MobileNavProps {
  entries: EntryEssential[];
}

export function MobileNav({ entries }: MobileNavProps) {
  const [isVisible, setVisibility] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > Number.parseInt(BREAKPOINTS.sm));
    };

    // Set initial value on client side
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Lock scroll when Nav overlay is visible and screen is not large
    if (isVisible && !isLargeScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isVisible, isLargeScreen]);

  useEffect(() => {
    // Ensure Nav is hidden on large screens
    if (isLargeScreen) {
      setVisibility(false);
    }
  }, [isLargeScreen]);

  return (
    <>
      <button
        className={`MobileNavMenu ${isVisible ? 'MobileNavMenu--isVisible' : ''}`}
        onClick={() => setVisibility(!isVisible)}
        type="button"
      />

      <div className={`MobileNavOverlay ${isVisible ? 'MobileNavOverlay--isVisible' : ''}`}>
        <div className="MobileNavWrapper">
          <ul>
            {entries.map(({ data, collection, slug }, index) => {
              const year = formatYear(data.date);
              const title = stripTags(data.title);

              return (
                <li
                  className={`MobileNavListItem ${isVisible ? 'MobileNavListItem--isVisible' : ''}`}
                  key={`${title}-${year}`}
                  style={{ animationDelay: `calc(${50 * (index + 1)}ms)` }}
                >
                  <a href={`/${collection}/${slug}`}>
                    {title}
                    <span
                      style={{
                        display: 'block',
                        alignSelf: 'end',
                        borderBottom: '1px dotted currentColor',
                        flexGrow: 1,
                        margin: '0 6px 6px',
                      }}
                    />
                    <span>{year}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
