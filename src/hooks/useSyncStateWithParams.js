import { useCallback, useState } from "react";
import { setSearch } from "utils/location";
import { getValuesFromParams } from "utils/url";

const useSyncStateWithParams = (initialValues) => {
  const [state, setState] = useState(() => getValuesFromParams(initialValues));

  const setParamState = useCallback((newParams = {}) => {
    // Get current search params
    const search = new URLSearchParams(window.location.search);

    // Update new params
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) search.set(key, value);
      else search.delete(key);
    });

    // Set params
    setSearch(search);

    // update filters to get the data with new filters
    setState((prevState) => ({
      ...prevState,
      ...newParams
    }));
  }, []);

  return [state, setParamState];
};

export default useSyncStateWithParams;
