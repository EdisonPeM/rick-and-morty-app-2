import ApiClient from "services/ApiClient";
import { getEmptyArray } from "utils/arrays";
import { fetchFail, fetchStart, fetchSuccess, saveLocations } from "./slice";

export const getAllLocations = () => async (dispatch) => {
  dispatch(fetchStart());

  try {
    // Ask for first page
    const { data } = await ApiClient.get("/location");
    const { info, results: locations } = data;
    const { pages, count } = info;

    // Save first page locations
    dispatch(saveLocations(locations));

    // Save other pages in same action
    Promise.all(
      getEmptyArray(pages - 1).map(async (_v, i) => {
        const page = i + 2; //
        const { data: pageData } = await ApiClient.get("/location", {
          params: { page }
        });
        const { results } = pageData;

        dispatch(saveLocations(results));
      })
    ).then(() => {
      dispatch(fetchSuccess());
    });

    return { pages, count };
  } catch (error) {
    console.warn(error);
    dispatch(
      fetchFail({
        message: error.message,
        code: error.code
      })
    );
  }
};

export const getLocationsByFilters = (filters = {}) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await ApiClient.get("/location", { params: filters });

    const { info, results: locations } = data;
    const { count, pages } = info;
    const results = locations.map(({ id }) => id);

    dispatch(saveLocations(locations));
    dispatch(fetchSuccess());

    return { count, results, pages };
  } catch (error) {
    console.warn(error);
    dispatch(
      fetchFail({
        message: error.message,
        code: error.code
      })
    );
  }
};

export const getLocationById = (id) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await ApiClient.get(`/location/${id}`);
    const locations = Array.isArray(data) ? data : [data];
    dispatch(saveLocations(locations));
    dispatch(fetchSuccess());
  } catch (error) {
    console.warn(error);
    dispatch(
      fetchFail({
        message: error.message,
        code: error.code
      })
    );
  }
};
