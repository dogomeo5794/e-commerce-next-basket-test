"use client"

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./modules/productSlice";
import authSlice from "./modules/authSlice";

export const store = configureStore({
    reducer: {
        product: productSlice,
        auth: authSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;