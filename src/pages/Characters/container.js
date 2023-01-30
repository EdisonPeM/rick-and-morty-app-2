/**
 * UI: Container - Characters List Page
 */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useSyncStateWithParams from "hooks/useSyncStateWithParams";

import { getCharactersByFilters } from "store/characters/actions";
import { initialValues } from "./constants";

import CharactersPage from "./CharactersPage";

const CharactersContainer = () => {
  // Filters State - Initial State = Search Params + Default Values
  const [filters, setFilters] = useSyncStateWithParams(initialValues);
  const [metaData, setMetaData] = useState({
    results: [],
    count: 0,
    pages: 1
  });

  // handle get data when filters change
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      // Call to getCharactersByFilters action
      const data = await dispatch(getCharactersByFilters(filters));

      // save meta data
      setMetaData({
        results: data?.results ?? [],
        count: data?.count ?? 0,
        pages: data?.pages ?? 1
      });
    };

    fetchData();
  }, [dispatch, filters]);

  // Add state to show or hide the filters
  const [{ showFilters } = {}, setFiltersState] = useSyncStateWithParams({
    showFilters: ""
  });
  const toggleFilters = () => setFiltersState({ showFilters: !showFilters });

  const props = {
    filters,
    setFilters,
    showFilters: !!showFilters,
    toggleFilters,
    ...metaData
  };

  return <CharactersPage {...props} />;
};

export default CharactersContainer;
