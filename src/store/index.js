import { configureStore } from "@reduxjs/toolkit";

import characters from "./characters";
import locations from "./locations";

export const store = configureStore({
  reducer: {
    characters,
    locations
  }
});
