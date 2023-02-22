import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./slices/adminSlice";
import navigationReducer from "./slices/navigationSlice";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    navigation: navigationReducer,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
