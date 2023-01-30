import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSyncStateWithParams from "hooks/useSyncStateWithParams";

import { getAllLocations } from "store/locations/actions";
import { sortByAttr } from "utils/arrays";
import { initialValues, PAGINATION_SIZE } from "./constants";

import { matchByQuery } from "./utils";

import LocationsPage from "./LocationsPage";
import { escapeRegExp } from "utils/regexp";

const LocationsContanier = () => {
  // Get all locations in first render
  const dispatch = useDispatch();
  useEffect(() => void dispatch(getAllLocations()), [dispatch]);

  const [filters, setFilters] = useSyncStateWithParams(initialValues);
  const storedLocations = useSelector((s) => Object.values(s.locations.byId));

  // Front-end side filters
  const page = +filters.page || 1;
  const keyword = filters.q;
  const sortBy = filters.sortBy;

  // Sort all locations by keyword
  const locationsSortered = useMemo(() => sortByAttr(storedLocations, sortBy), [
    storedLocations,
    sortBy
  ]);

  // Filter all locations by keyword
  const locationsFiltered = useMemo(
    () => locationsSortered.filter((v) => matchByQuery(v, keyword)),
    [locationsSortered, keyword]
  );

  // Get only page-size locations
  const results = useMemo(
    () =>
      locationsFiltered.slice(0, page * PAGINATION_SIZE).map(({ id }) => id),
    [locationsFiltered, page]
  );

  // Handle load more
  const total = locationsFiltered.length;
  const loadMore = () => {
    if (results.length <= total) {
      setFilters({ page: page + 1 });
    }
  };

  // Add state to show or hide the filters
  const [{ showFilters } = {}, setFiltersState] = useSyncStateWithParams({
    showFilters: ""
  });
  const toggleFilters = () => setFiltersState({ showFilters: !showFilters });

  const props = {
    total,
    keyword,
    results,
    filters,
    setFilters,
    showFilters,
    toggleFilters,
    loadMore
  };

  return <LocationsPage {...props} />;
};

export default LocationsContanier;
