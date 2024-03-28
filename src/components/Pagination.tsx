import { stripTags } from 'src/utils/stripTags';
import './Pagination.css';

interface PaginationProps {
  prev?: {
    collection: string;
    slug: string;
    data: {
      title: string;
      status: string;
    };
  };
  next?: {
    collection: string;
    slug: string;
    data: {
      title: string;
      status: string;
    };
  };
}

export function Pagination({ prev, next }: PaginationProps) {
  const showNext = next && next.data.status === 'live';
  const showPrev = prev && prev.data.status === 'live';

  return (
    <section className="Pagination" role="navigation" aria-label="Pagination Navigation">
      <div>
        {showNext && (
          <>
            <h6>Newer</h6>
            <a href={`/${next.collection}/${next.slug}`}>{stripTags(next.data.title)}</a>
          </>
        )}
      </div>

      <div>
        {showPrev && (
          <>
            <h6>Older</h6>
            <a href={`/${prev.collection}/${prev.slug}`}>{stripTags(prev.data.title)}</a>
          </>
        )}
      </div>
    </section>
  );
}
