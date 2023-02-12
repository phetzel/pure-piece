import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CartChangeType,
  ProductStateType,
  ProductType,
} from "../../types/productTypes";

const initialProductState: ProductStateType = {
  cart: [],
};

export const productSlice = createSlice({
  name: "UpdateProductAction",
  initialState: initialProductState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartChangeType>) => {
      const { count, product } = action.payload;
      const filteredCart = state.cart.filter((p) => p.id === product.id);

      if (filteredCart.length) {
        console.log("length");
        const newCartCount = filteredCart[0].count + count;
        if (newCartCount > 0) {
          filteredCart[0].count = newCartCount;
        } else {
          state.cart = state.cart.filter(
            (selectedProduct) => selectedProduct.id != product.id
          );
        }
      } else {
        console.log("no length");
        state.cart.push({ ...product, count: count });
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    default: (state) => {
      return state;
    },
  },
});

export const { emptyCart, updateCart } = productSlice.actions;
export default productSlice.reducer;
