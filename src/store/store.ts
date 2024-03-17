import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "../features/Products/slice";
import cartReducer from '../features/Cart/slice'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;