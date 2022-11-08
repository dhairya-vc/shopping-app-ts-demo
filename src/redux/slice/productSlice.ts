import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Filters, Product, SortBy } from "../../config/types";
import { RootState } from "../store";
import products from "../../mock/product.json";

export interface ProductState {
  loading: boolean;
  isError: boolean;
  data: Product[];
  query: string;
  sort: SortBy;
  filters: Filters;
}

const initialState: ProductState = {
  loading: false,
  isError: false,
  data: products,
  query: "",
  sort: "ASC",
  filters: {
    category: [],
    rating: 0,
    price: 0,
  },
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestProductBegin: (state) => {
      state.loading = true;
      state.isError = false;
    },
    requestProductSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    },
    requestProductFailed: (state) => {
      state.loading = false;
      state.isError = true;
    },
    setQuery: (state, action: PayloadAction<any>) => {
      state.query = action.payload;
    },
    setSort: (state, action: PayloadAction<any>) => {
      state.sort = action.payload;
    },
    setFilters: (state, action: PayloadAction<any>) => {
      state.filters = action.payload;
    },
  },
});

export const {
  requestProductBegin,
  requestProductSuccess,
  requestProductFailed,
  setQuery,
  setSort,
	setFilters
} = productSlice.actions;

// export const requestProducts = createAsyncThunk(
//   "product/get-products",
//   async ({}, { dispatch }) => {
//     try {
//       dispatch(requestProductBegin());
//       const response = products;
//       console.log("TCL ~ response");
//       dispatch(requestProductSuccess(response));
//     } catch (error) {
//       dispatch(requestProductFailed());
//     }
//   }
// );

export const getProducts = (state: RootState) => {
  return state.product.data;
};
export const getSearchQuery = (state: RootState) => {
  return state.product.query;
};
export const getActiveSort = (state: RootState) => {
  return state.product.sort;
};
export const getActiveFilters = (state: RootState) => {
  return state.product.filters;
};
export const loading = (state: RootState) => {
  return state.product.loading;
};

export default productSlice.reducer;
