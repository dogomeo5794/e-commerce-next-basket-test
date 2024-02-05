"use client";

import { ProductDataInterface } from "@/components/cards/ProductListCard";
import { createSlice } from "@reduxjs/toolkit";

export interface CartListData extends ProductDataInterface {
  quantity: number,
  totalPrice: number
}

export interface ProductState {
  cartId?: number,
  name: string;
  cartCounter: number;
  cartList: Array<CartListData>,
  wishlistCounter: 0,
  wishList: Array<CartListData>,
}

const initialState: ProductState = {
  cartId: 0,
  name: "product 1",
  cartCounter: 0,
  cartList: [],
  wishlistCounter: 0,
  wishList: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList(state, actions) {
      console.log("xxx", state);
      console.log("xxx", actions);
    },
    setCartId(state, actions) {
      state.cartId = actions.payload;
    },
    setCartCounter(state, actions) {
      state.cartCounter = actions.payload;
    },
    setCartProducts(state, actions) {
      state.cartList = actions.payload?.map((data: any) => {
        data.totalPrice = data.quantity * data.price;
        return data;
      }) || [];
    },
    addToCart(state, actions) {
      const product = actions.payload;
      const existInCart = state.cartList.some(data => data.id === product.id);
      if (existInCart) {
        state.cartList.map(data => {
          if (data.id === product.id) {
            data.quantity++;
          }
          data.totalPrice = data.quantity * data.price;
          return data;
        })
      }
      else {
        state.cartList.push({
          ...product,
          quantity: 1,
          totalPrice: product.price
        })
        state.cartCounter++;
      }
      localStorage.setItem("carts", JSON.stringify(state.cartList))
    },
    updateCartQuantity(state, actions) {
      const { productId, quantity } = actions.payload;
      const existInCart = state.cartList.some(data => data.id === productId);
      if (existInCart) {
        state.cartList.map(data => {
          if (data.id === productId) {
            data.quantity = quantity;
          }
          data.totalPrice = data.quantity * data.price;
          return data;
        })
      }
      localStorage.setItem("carts", JSON.stringify(state.cartList))
    },
    removeFromCart(state, actions) {
      const productId = actions.payload;
      const product = state.cartList.find(data => data.id === productId)
      if (product) {
        if (product.quantity > 1) {
          state.cartList.map(data => {
            if (data.id === product.id) {
              data.quantity--;
            }
            data.totalPrice = data.quantity * data.price;
            return data;
          })
        }
        else {
          const index = state.cartList.findIndex(data => data.id === productId);
          state.cartList.splice(index, 1)
          state.cartCounter--;
        }
      }
      localStorage.setItem("carts", JSON.stringify(state.cartList))
    },
    fullRemoveFromCart(state, actions) {
      const productId = actions.payload;
      const index = state.cartList.findIndex(data => data.id === productId);
      if (index > -1) {
        state.cartList.splice(index, 1)
        state.cartCounter--;
      }
      localStorage.setItem("carts", JSON.stringify(state.cartList))
    },
    setToWishList(state, actions) {
      state.wishList = actions.payload
    },
    setToWishListCounter(state, actions) {
      state.wishlistCounter = actions.payload
    },
    addToWishList(state, actions) {
      const product = actions.payload;
      const existInWishList = state.wishList.some(data => data.id === product.id);
      if (!existInWishList) {
        state.wishList.push(product)
        state.wishlistCounter++;
      }

      localStorage.setItem("wishList", JSON.stringify(state.wishList))
    },
    removeFromWishList(state, actions) {
      const productId = actions.payload;
      const index = state.wishList.findIndex(data => data.id === productId);
      console.log('index', index)
      if (index > -1) {
        state.wishList.splice(index, 1)
        state.wishlistCounter--;
      }

      localStorage.setItem("wishList", JSON.stringify(state.wishList))
    },
  },
});

export const { 
  getProductList, 
  setCartId,
  addToCart,
  setCartCounter,
  setCartProducts,
  removeFromCart,
  addToWishList,
  removeFromWishList,
  fullRemoveFromCart,
  setToWishList,
  setToWishListCounter,
  updateCartQuantity
} = productSlice.actions;

export default productSlice.reducer;
