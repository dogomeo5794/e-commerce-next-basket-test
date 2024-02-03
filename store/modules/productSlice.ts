"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ProductState {
  name: string;
  cartCounter: number;
}

const initialState: ProductState = {
  name: "product 1",
  cartCounter: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList(state, actions) {
      console.log("xxx", state);
      console.log("xxx", actions);
    },
  },
});

export const { getProductList } = productSlice.actions;

export default productSlice.reducer;
