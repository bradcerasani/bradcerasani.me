import type { CollectionEntry } from 'astro:content';

import { formatYear } from 'src/utils/formatYear';
import { stripTags } from 'src/utils/stripTags';

import './Timeline.css';

interface TimelineItemProps {
  entry: CollectionEntry<'projects' | 'writing'>;
  children?: React.ReactNode;
}

export function TimelineItem({ entry, children }: TimelineItemProps) {
  const { date, dateRange, description, image, status, title, video } = entry.data;
  const slug = `/${entry.collection}/${entry.slug}`;

  const buttonText =
    entry.data.cta || (entry.collection === 'writing' ? 'Read Post' : 'View Project');
  const isDraft = status !== 'live';
  const showMedia = video || image;
  const displayTitle = stripTags(title);
  const href = !isDraft ? slug : '#';
  const year = formatYear(date);

  return (
    <div className={`TimelineItem ${isDraft ? 'is-draft' : ''}`}>
      {showMedia && (
        <a href={href}>
          <div className="TimelineItemImageWrapper">{children}</div>
          <span className="u-visuallyHidden">{displayTitle}</span>
        </a>
      )}

      <article className="TimelineItemDetailsWrapper">
        <div className="TimelineItemNode" />
        <div className="Timeline-date">{dateRange || year}</div>

        <a href={href}>
          <h3>{displayTitle}</h3>
        </a>

        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />

        <a href={href} className="Timeline-link" style={{ opacity: isDraft ? 0.5 : 1 }}>
          {isDraft ? 'Draft' : buttonText} {!isDraft && '→'}
        </a>
      </article>
    </div>
  );
}
