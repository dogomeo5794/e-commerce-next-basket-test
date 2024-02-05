"use client"

import { createSlice } from "@reduxjs/toolkit"

export interface AuthState {
  id: number
  username: string
  isAuth: boolean
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

const initialState: AuthState = {
  id: 0,
  username: "",
  isAuth: false,
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  token: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, actions) {
      const user = actions.payload;
      state.id = user.id;
      state.username = user.username;
      // state.isAuth = user.isAuth;
      state.email = user.email;
      state.firstName = user.firstName;
      state.lastName = user.lastName;
      state.gender = user.gender;
      state.image = user.image;
      // state.token = user.token;
    },
    setToken(state, actions) {
      state.token = actions.payload;
    },
    setLogin(state) {
      state.isAuth = true;
    },
    setLogout(state) {
      state.id = 0,
      state.username = "";
      state.isAuth = false;
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.gender = "";
      state.image = "";
      state.token = "";
    }
  }  
})

export const {
  setToken,
  setUser,
  setLogin,
  setLogout,
} = authSlice.actions;

export default authSlice.reducer;