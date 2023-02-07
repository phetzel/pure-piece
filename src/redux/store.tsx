import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import commonReducer from "./slices/commonSlice";

const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
