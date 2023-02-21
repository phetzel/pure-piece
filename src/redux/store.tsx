import { configureStore } from "@reduxjs/toolkit";
// This is how you import a reducer, based on the prior export.
import navigationReducer from "./slices/navigationSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
