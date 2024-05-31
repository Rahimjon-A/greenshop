import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLiked: false,
    carts: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleLiked: (state) => {
            state.isLiked = true;
        },
    },
});

export const {handleLiked } = cartSlice.actions
export default cartSlice.reducer
