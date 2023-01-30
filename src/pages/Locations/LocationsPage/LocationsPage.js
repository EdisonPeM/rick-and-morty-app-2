import Collapse from "components/Collapse";
import FilterIcon from "components/Icons/FilterIcon";
import GoTop from "components/GoTop";
import { isEmpty } from "utils/common";
import LocationForm from "../LocationForm";
import LocationResults from "../LocationResults";
import LocationLoadMore from "../LocationLoadMore";

const LocationsPage = ({
  total,
  keyword,
  results,
  filters,
  setFilters,
  showFilters,
  toggleFilters,
  loadMore
}) => {
  const areAllLoaded = results.length === total;

  return (
    <div>
      <div className="d-flex f-space-between f-center">
        <h1>Locations</h1>

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
        <LocationForm filters={filters} setFilters={setFilters} />
      </Collapse>
      <hr />
      {!isEmpty(results) ? (
        <p>
          Showing {results.length} of {total}
        </p>
      ) : null}
      <LocationResults results={results} keyword={keyword} />
      <LocationLoadMore hide={areAllLoaded} onLoadMore={loadMore} />
      <GoTop />
    </div>
  );
};

export default LocationsPage;
