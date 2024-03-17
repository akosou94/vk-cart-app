import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsAsync } from './api';
import { ProductsState } from './types';



const initialState: ProductsState = {
  status: 'loading',
  error: null,
  products: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message !== undefined ? action.error.message : null;
      });
  },
});

export default productsSlice;