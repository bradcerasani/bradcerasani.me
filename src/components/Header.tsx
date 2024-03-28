import { MobileNav } from 'src/components';
import type { EntryEssential } from 'src/types';
import { formatDate } from 'src/utils/formatDate';
import './Header.css';
interface HeaderProps {
  date?: Date;
  entries: EntryEssential[];
  headline?: string;
}

export function Header({ date, entries, headline }: HeaderProps) {
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

          <MobileNav entries={entries} />
        </div>

        {headline && (
          <div className="HeroContainer">
            <h1>
              {/* biome-ignore lint: headline src is controlled */}
              <span dangerouslySetInnerHTML={{ __html: headline }} />
              {date && <span className="HeroContainer-Date">{formattedDate}</span>}
            </h1>
          </div>
        )}
      </header>
    </>
  );
}
