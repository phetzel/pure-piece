import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import commonReducer from "./slices/commonSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    common: commonReducer,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
