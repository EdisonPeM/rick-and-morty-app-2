import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../constants/common";
import initialState from "./initialState";

export const locationsSlice = createSlice({
  name: "locations",
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
    saveLocations(state, action) {
      const locations = action.payload ?? [];
      locations.forEach((loc) => {
        if (!state.byId[loc.id]) {
          const residents = loc?.residents ?? [];
          const residentsIds = residents.map((url) => +url.split("/").at(-1));

          state.byId[loc.id] = {
            ...loc,
            residents: residentsIds
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
  saveLocations
} = locationsSlice.actions;
