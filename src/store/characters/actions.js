import ApiClient from "services/ApiClient";
import { fetchFail, fetchStart, fetchSuccess, saveCharacters } from "./slice";

export const getCharactersByFilters = (filters = {}) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await ApiClient.get("/character", { params: filters });

    const { info, results: characters } = data;
    const { count, pages } = info;
    const results = characters.map(({ id }) => id);

    dispatch(saveCharacters(characters));
    dispatch(fetchSuccess());

    return { count, pages, results };
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

export const getCharacterById = (id) => async (dispatch) => {
  dispatch(fetchStart());

  try {
    const { data } = await ApiClient.get(`/character/${id}`);
    const characters = Array.isArray(data) ? data : [data];
    dispatch(saveCharacters(characters));
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
