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
  return (
    <section className="Pagination" role="navigation" aria-label="Pagination Navigation">
      <div className="Pagination-next">
        {next && (
          <>
            <h6>Next</h6>
            <a href={`/${next.collection}/${next.slug}`}>{stripTags(next.data.title)}</a>
          </>
        )}
      </div>

      <div className="Pagination-prev">
        {prev && (
          <>
            <h6>Previous</h6>
            <a href={`/${prev.collection}/${prev.slug}`}>{stripTags(prev.data.title)}</a>
          </>
        )}
      </div>
    </section>
  );
}
