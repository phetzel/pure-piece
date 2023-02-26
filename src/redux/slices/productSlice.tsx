import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartChangeType, ProductStateType } from "../../types/productTypes";

const initialProductState: ProductStateType = {
  cartState: [],
};

export const productSlice = createSlice({
  name: "UpdateProductAction",
  initialState: initialProductState,
  reducers: {
    updateCart: (state, action: PayloadAction<CartChangeType>) => {
      const { count, product } = action.payload;
      const filteredCart = state.cartState.filter((p) => p.id === product.id);

      if (filteredCart.length) {
        const newCartCount = filteredCart[0].count + count;
        if (newCartCount > 0) {
          filteredCart[0].count = newCartCount;
        } else {
          state.cartState = state.cartState.filter(
            (selectedProduct) => selectedProduct.id !== product.id
          );
        }
      } else {
        state.cartState.push({ ...product, count: count });
      }
    },
    emptyCart: (state) => {
      state.cartState = [];
    },
    default: (state) => {
      return state;
    },
  },
});

export const { emptyCart, updateCart } = productSlice.actions;
export default productSlice.reducer;
