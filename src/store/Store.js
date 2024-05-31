import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../reducers/cart";

export const store = configureStore({
    reducer: {
        cart: CartReducer,
    },
});
