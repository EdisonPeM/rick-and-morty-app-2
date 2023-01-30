import { memo } from "react";
import CharactersForm from "../CharactersForm";
import CharactersResults from "../CharactersResults";
import Paginator from "components/Paginator";
import Collapse from "components/Collapse";
import FilterIcon from "components/Icons/FilterIcon";

const CharactersPage = ({
  filters,
  setFilters,
  showFilters,
  toggleFilters,
  pages,
  count,
  results
}) => {
  const handlePagination = {
    goTo: (page) => setFilters({ page }),
    current: +filters.page || 1,
    pages
  };

  return (
    <div>
      <div className="d-flex f-space-between f-center">
        <h1>Characters</h1>

        <button className="btn btn-ghost" onClick={toggleFilters}>
          <FilterIcon
            className="d-block"
            width={16}
            height={16}
            fill={showFilters ? "black" : "none"}
          />
        </button>
      </div>
      <Collapse open={showFilters}>
        <CharactersForm filters={filters} setFilters={setFilters} />
      </Collapse>
      <hr />
      <div className="d-flex f-space-between">
        <p>Total results: {count}</p>
        <p>Pages: {pages}</p>
      </div>
      <Paginator {...handlePagination} />
      <CharactersResults results={results} />
    </div>
  );
};
export default memo(CharactersPage);
