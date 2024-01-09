import { configureStore } from "@reduxjs/toolkit";
import { loadingSlice } from "../features/Loader";

export const store = configureStore({
  reducer: {
    loading:loadingSlice.reducer
  },
});
