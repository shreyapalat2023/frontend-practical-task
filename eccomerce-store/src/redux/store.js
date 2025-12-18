import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadState = () => {
    try {
      const state = localStorage.getItem("cart");
      return state ? JSON.parse(state) : undefined;
    } catch {
      return undefined;
    }
  };
  
  const saveState = (state) => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  };
  
  export const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: { cart: loadState() }
  });
  
  store.subscribe(() => saveState(store.getState()));
  