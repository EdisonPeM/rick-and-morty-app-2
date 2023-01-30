import { useMemo } from "react";
import { DEFAULT_OFFSET, DEFAULT_OPAGES_TO_SHOW, MIN_PAGE } from "./contants";

const Paginator = ({
  current = 1,
  pages = 1,
  goTo = () => {},
  maxPagesToShow = DEFAULT_OPAGES_TO_SHOW,
  offset = DEFAULT_OFFSET
}) => {
  const prevPage = current - MIN_PAGE;
  const nextPage = current + MIN_PAGE;
  const hasPrev = prevPage > 0;
  const hasNext = nextPage <= pages;
  const isGtmax = current > pages;
  const isStmin = current < MIN_PAGE;

  const goToFirst = () => goTo(MIN_PAGE);
  const goToLast = () => goTo(pages);
  const goPrev = () => (isGtmax ? goToLast() : goTo(prevPage));
  const goNext = () => (isStmin ? goToFirst() : goTo(nextPage));

  const pagesToShow = useMemo(() => {
    const maxPages = maxPagesToShow > pages ? pages : maxPagesToShow;
    return Array.from(new Array(maxPages)).map((_v, i) => {
      const validOffset = maxPages < offset ? 0 : offset;

      const delta = maxPages - 1;
      const minPage = current - validOffset;
      const firstPage = minPage < MIN_PAGE ? MIN_PAGE : minPage;
      const maxPage = firstPage + delta;

      if (maxPage < pages || firstPage > pages) {
        return firstPage + i;
      } else {
        return pages - delta + i;
      }
    });
  }, [current, maxPagesToShow, offset, pages]);

  return (
    <div className="d-flex f-space-between f-wrap">
      <div className="d-flex gap-3 bg-white">
        <button
          className="btn btn-ghost btn-sm"
          type="button"
          onClick={goToFirst}
          disabled={!hasPrev}
        >
          {"<< First"}
        </button>

        <button
          className="btn btn-ghost btn-sm"
          type="button"
          onClick={goPrev}
          disabled={!hasPrev}
        >
          {"< Prev"}
        </button>
      </div>

      <div className="d-flex gap-3 bg-white w-100 w-md-auto f-order-1 f-order-md-0 f-center">
        {pagesToShow.map((page) => (
          <button
            key={page}
            className="btn btn-ghost btn-sm"
            type="button"
            onClick={() => goTo(page)}
            disabled={page === current}
          >
            {page}
          </button>
        ))}
      </div>

      <div className="d-flex gap-3 bg-white">
        <button
          className="btn btn-ghost btn-sm"
          type="button"
          onClick={goNext}
          disabled={!hasNext}
        >
          {"Next >"}
        </button>

        <button
          className="btn btn-ghost btn-sm"
          type="button"
          onClick={goToLast}
          disabled={!hasNext}
        >
          {"Last >>"}
        </button>
      </div>
    </div>
  );
};

export default Paginator;
