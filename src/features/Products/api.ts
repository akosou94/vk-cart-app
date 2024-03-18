import { createAsyncThunk } from "@reduxjs/toolkit";

/* BASE_URL */
const baseUrl = 'https://fakestoreapi.com'

/* Асинхронный запрос на получение списка товаров */
export const fetchProductsAsync = createAsyncThunk('products/fetchProductsAsync', async () => {
  const response = await fetch(`${baseUrl}/products`);
  const data = await response.json();
  return data;
});