"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  _id: string;
  quantity: number;
  // Add other properties of your product here
}

interface PiHealthState {
  userInfo: any[]; // Update with actual type
  products: Product[];
}

const initialState: PiHealthState = {
  userInfo: [],
  products: [],
};

export const piHealthSlice = createSlice({
  name: "piHealth",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
} = piHealthSlice.actions;

export default piHealthSlice.reducer;
