import { createAsyncThunk } from "@reduxjs/toolkit";
const baseUrl = 'https://fakestoreapi.com'

export const fetchProductsAsync = createAsyncThunk('products/fetchProductsAsync', async () => {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();
  return data;
});