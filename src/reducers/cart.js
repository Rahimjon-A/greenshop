import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    modal: false,
    active: 0,
    carts: [],
    warning: false,
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        handleLiked: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex(
                (item) => item.id === itemId
            );
            if (itemIndex !== -1) {
                state.items[itemIndex].isLiked =
                    !state.items[itemIndex].isLiked;
            }
        },
        handleActive: (state, action) => {
            state.active = action.payload;
        },
        openModal: (state) => {
            state.modal = true;
        },
        closeModal: (state) => {
            state.modal = false;
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setCarts: (state, action) => {
            const item = action.payload;
            const itemIndex = state.carts.findIndex(
                (cartItem) => cartItem.id === item.id
            );
            if (itemIndex === -1) {
                state.carts = [...state.carts, { ...item, amount: 1 }];
            } else {
                state.warning = true;
            }
        },
        clearWarning: (state) => {
            state.warning = false;
        },
        handleRemove: (state, action) => {
            state.carts = state.carts.filter(
                (item) => item.id !== action.payload
            );
        },
        handlePrice: (state) => {
            state.totalPrice = state.carts.reduce(
                (subtotal, item) => subtotal + item.amount * item.price,
                0
            );

        },

        increment: (state, action) => {
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1) {
                state.carts[itemIndex].amount += 1;
            }
        },

        decrement: (state, action) => {
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1 && state.carts[itemIndex].amount > 1) {
                state.carts[itemIndex].amount -= 1;
            }
        },
    },
});

export const {
    handleLiked,
    handleActive,
    openModal,
    closeModal,
    setItems,
    setCarts,
    clearWarning,
    handleRemove,
    handlePrice,
    increment,
    decrement,
} = cartSlice.actions;

export default cartSlice.reducer;
