import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import productsSlice from "../features/Products/slice";
import cartSlice from "../features/Cart/slice";

/* Редюсеры */
const rootReducer = combineReducers({
  [productsSlice.name]: productsSlice.reducer,
  [cartSlice.name]: cartSlice.reducer
});

/* Store */
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;