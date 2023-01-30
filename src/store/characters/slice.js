import { createSlice } from "@reduxjs/toolkit";
import { getIdFromUrl } from "utils/url";
import { STATUS } from "../../constants/common";
import initialState from "./initialState";

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.status = STATUS.PENDING;
    },
    fetchSuccess(state) {
      state.status = STATUS.RESOLVED;
      state.error = null;
    },
    fetchFail(state, action) {
      state.status = STATUS.REJECTED;
      state.error = action.payload;
    },
    saveCharacters(state, action) {
      const characters = action.payload ?? [];
      characters.forEach((char) => {
        if (!state.byId[char.id]) {
          const originUrl = char.origin?.url ?? "";
          const originId = getIdFromUrl(originUrl);

          const locationUrl = char.location?.url ?? "";
          const locationId = getIdFromUrl(locationUrl);

          state.byId[char.id] = {
            ...char,
            origin: originId,
            location: locationId
          };
        }
      });
    }
  }
});

export const {
  fetchStart,
  fetchSuccess,
  fetchFail,
  saveCharacters
} = charactersSlice.actions;
