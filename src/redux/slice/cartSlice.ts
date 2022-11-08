import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "../../config/types";
import { RootState } from "../store";

export interface CartState {
  loading: boolean;
  isError: boolean;
  data: CartItem[];
}

const initialState: CartState = {
  loading: false,
  isError: false,
  data: [] as CartItem[],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    requestAddToCart: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    requestRemoveFromCart: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
});

export const { requestAddToCart, requestRemoveFromCart } = cartSlice.actions;

export const getCartItems = (state: RootState) => {
  return state.cart.data;
};

export default cartSlice.reducer;
