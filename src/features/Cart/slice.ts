import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './types';
import { Product } from '../Products/types';


const initialState: CartState = {
  status: 'loading',
  error: null,
  cart: [],
  totalPrice: 0,
  quantity: 0
}

const MAX_QUANTITY = 10;

const findProductIndex = (cart: Product[], productId: number) => {
  return cart.findIndex((product: Product) => product.id === productId);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const existingIndex = findProductIndex(state.cart, payload.id);

      if (existingIndex !== -1) {
        if (state.cart[existingIndex].quantity < MAX_QUANTITY) {
          state.cart[existingIndex].quantity++;
          state.totalPrice += payload.price;
        }
      } else {
        state.cart.push({ ...payload, quantity: 1 });
        state.totalPrice += payload.price;
      }

      state.totalPrice = Number(state.totalPrice.toFixed(2));
    },
    removeFromCart: (state, action) => {
      const indexToRemove = state.cart.findIndex((product) => product.id === action.payload);
      if (indexToRemove !== -1) {
        const removedItem = state.cart[indexToRemove];
        if (removedItem.quantity > 1) {
          removedItem.quantity--;
          state.totalPrice -= removedItem.price;
        } else {
          state.totalPrice -= removedItem.price;
          state.cart.splice(indexToRemove, 1);
        }
        state.totalPrice = Number(state.totalPrice.toFixed(2));
      }
    },
    deleteFromCart: (state, action) => {
      const deletedItems = state.cart.filter((product) => product.id === action.payload);
      if (deletedItems.length > 0) {
        deletedItems.forEach((deletedItem) => {
          state.cart = state.cart.filter((product) => product.id !== action.payload);
          state.totalPrice -= deletedItem.price * deletedItem.quantity;
        });
        state.totalPrice = Number(state.totalPrice.toFixed(2));
      }
    },
    clearCart: (state, action) => {
      state.cart = action.payload
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, removeFromCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice;
