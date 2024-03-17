import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  status: string;
  error: null | string;
  cart: any[];
}

const initialState: CartState = {
  status: 'loading',
  error: null,
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;