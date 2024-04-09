import { forwardRef, useEffect, useRef, useState } from 'react';
import { linkList } from 'src/content/social/linkList';
import './SocialLinks.css';

const SocialLink = forwardRef<
  HTMLAnchorElement,
  { title: string; url: string; onMouseEnter: () => void }
>(({ title, url, onMouseEnter }, ref) => (
  <li onMouseEnter={onMouseEnter} className="SocialLink">
    <a href={url} rel="noopener noreferrer" target="_blank" ref={ref} className={title}>
      {title}
    </a>
  </li>
));

SocialLink.displayName = 'SocialLink';

export function SocialLinks() {
  const [widths, setWidths] = useState<number[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeLink, setActiveLink] = useState<number | -1>(-1);
  const maxWidth = Math.max(...widths);

  useEffect(() => {
    setWidths(linkRefs.current.map((ref) => ref?.offsetWidth || 0));
  }, []);

  const handleMouseEnter = (index: number) => () => {
    setActiveLink(index);
  };

  return (
    <ul className="SocialLinks" style={{ width: `${maxWidth}px` }}>
      {linkList.map(({ title, url }, index) => (
        <SocialLink
          onMouseEnter={handleMouseEnter(index)}
          key={title}
          title={title}
          url={url}
          ref={(el) => {
            linkRefs.current[index] = el;
          }}
        />
      ))}
      <li
        className="SocialLink-highlight"
        style={{
          width: `calc(${widths[activeLink]}px - 2.5rem)`,
          transform: `translateY(calc(${activeLink === -1 ? 0 : activeLink} * 1.75rem))`,
        }}
      />
    </ul>
  );
}
