"use client"

import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
    username: string
    userId: string
    isAuth: boolean
}

const initialState: AuthState = {
    username: "",
    userId: "",
    isAuth: false
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken() {
      
    },
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  }  
})

export const {
  setToken
} = authSlice.actions;

export default authSlice.reducer;