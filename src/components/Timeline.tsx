import type { CollectionEntry } from 'astro:content';
import { formatYear, stripTags } from 'src/utils';
import './Timeline.css';

interface TimelineItemProps {
  entry: CollectionEntry<'projects' | 'writing'>;
  children?: React.ReactNode;
}

export function TimelineItem({ entry, children }: TimelineItemProps) {
  const { date, dateRange, description, image, status, title, video } = entry.data;
  const slug = `/${entry.collection}/${entry.slug}`;

  const buttonText =
    entry.data.cta || (entry.collection === 'writing' ? 'Read post' : 'View project');
  const isDraft = status !== 'live';
  const showMedia = video || image;
  const displayTitle = stripTags(title);
  const href = !isDraft ? slug : '#';
  const year = formatYear(date);

  return (
    <div className={`TimelineItem ${isDraft ? 'is-draft' : ''}`}>
      {showMedia && (
        <a href={href}>
          <div className="TimelineItem-media">{children}</div>
          <span className="u-visuallyHidden">{displayTitle}</span>
        </a>
      )}

      <article className="TimelineItem-details">
        <div className="TimelineItem-node" />
        <div className="TimelineItem-date">{dateRange || year}</div>

        <a href={href} data-astro-prefetch="viewport">
          <h2>{displayTitle}</h2>
        </a>

        <p>{description}</p>

        <a href={href} className="TimelineItem-link" style={{ opacity: isDraft ? 0.5 : 1 }}>
          {isDraft ? 'Draft' : buttonText} {!isDraft && '→'}
        </a>
      </article>
    </div>
  );
}
