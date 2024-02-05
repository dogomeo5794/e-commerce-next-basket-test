"use client"

import { ThemeProvider, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import theme from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { API } from "@/lib/api";
import { setLogin, setToken, setUser } from "@/store/modules/authSlice";
import { RootState } from "@/store";
import { setCartCounter, setCartId, setCartProducts, setToWishList, setToWishListCounter } from "@/store/modules/productSlice";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const wishList = useSelector((state: RootState) => state.product.wishList)
  const userId = useSelector((state: RootState) => state.auth.id)
  const token = useSelector((state: RootState) => state.auth.token)
  const getUserData = async () => {
    try {
      const {data, status} = await API.get("/auth/me", {
        headers: {
          "Authorization": token
        }
      })

      if ([200,201].includes(status)) {
        dispatch(setToken(token))
        dispatch(setUser(data))
        dispatch(setLogin())
      }

      console.log('data', data)
    } catch (error) {
      console.log('error', error);
    }
  }

  const getUserCart = async () => {
    try {
      // const {data, status} = await API.get(`/carts/user/${userId}`)

      // if ([200,201].includes(status)) {
      //   const cart = data?.carts?.[0] || {};
      //   const products = cart.products || [];
      //   dispatch(setCartCounter(cart?.totalProducts || 0))
      //   dispatch(setCartProducts(products))
      //   if (products.length > 0) {
      //     dispatch(setCartId(cart.id))
      //   }
      // }
      // console.log('data', data)

      const carts = JSON.parse(localStorage.getItem("carts") || "[]");
      dispatch(setCartProducts(carts));
      dispatch(setCartCounter(carts.length));
    } catch (error) {
      console.log('error', error);
    }
  }

  const getUserWishList = async () => {
    try {
      const wishListLocal = JSON.parse(localStorage.getItem("wishList") || "[]");
      dispatch(setToWishList(wishListLocal));
      dispatch(setToWishListCounter(wishListLocal.length));
    } catch (error) {
      console.log('error', error);
    }
  }

  React.useEffect(() => {
    if (token) {
      getUserData();
    }

    if (typeof window !== 'undefined') {

    }
  }, [token])

  React.useEffect(() => {
    // if (userId) {
      getUserCart();
      getUserWishList();
    // }
  }, [userId])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
