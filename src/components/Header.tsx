import type { CollectionEntry } from 'astro:content';
import { MobileNav } from 'src/components';
import { formatDate } from 'src/utils/formatDate';
import './Header.css';

export function Header({
  date,
  headline,
  posts,
}: {
  date?: Date;
  headline?: string;
  posts: CollectionEntry<'projects' | 'writing'>[];
}) {
  const formattedDate = date ? formatDate(date) : null;

  return (
    <>
      <div className="Glow" />
      <header className="Header" itemScope itemType="https://schema.org/SiteNavigationElement">
        <div className="NavWrapper">
          <a href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <h2 className="Header-logo">
              Brad Cerasani
              <span>Design &amp; Engineering</span>
            </h2>
          </a>

          <MobileNav posts={posts} />
        </div>

        {headline && (
          <div className="HeroContainer">
            <h1>
              <span dangerouslySetInnerHTML={{ __html: headline }} />
              {date && <span className="HeroContainer-Date">{formattedDate}</span>}
            </h1>
          </div>
        )}
      </header>
    </>
  );
}
