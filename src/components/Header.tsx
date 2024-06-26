import { MobileNav } from 'src/components';
import type { EntryEssential } from 'src/types';
import './Header.css';
interface HeaderProps {
  entries: EntryEssential[];
  headline?: string;
}

export function Header({ entries, headline }: HeaderProps) {
  return (
    <>
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
            </h1>
          </div>
        )}
      </header>
    </>
  );
}
