import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './types';


const initialState: CartState = {
  status: 'loading',
  error: null,
  cart: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.totalPrice += action.payload.price
      state.totalPrice = Number(state.totalPrice.toFixed(2));
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.cart.findIndex((product) => product.id === action.payload);
      if (indexToRemove !== -1) {
        const removedItem = state.cart[indexToRemove];
        state.cart.splice(indexToRemove, 1);
        state.totalPrice -= removedItem.price;
        state.totalPrice = Number(state.totalPrice.toFixed(2));
      }
    },
    deleteFromCart: (state, action) => {
      const deletedItems = state.cart.filter((product) => product.id === action.payload);
      if (deletedItems.length > 0) {
        deletedItems.forEach((deletedItem) => {
          state.cart = state.cart.filter((product) => product.id !== action.payload);
          state.totalPrice -= deletedItem.price;
        });
        state.totalPrice = Number(state.totalPrice.toFixed(2));
      }
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export default cartSlice;
