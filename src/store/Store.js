import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { setItems } from "../reducers/cart";
import { data } from "../data/data";

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// Initialize items
store.dispatch(setItems(data));

export default store;

