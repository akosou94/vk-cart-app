import { Product } from "../Products/types";

/* Интерфейс для стейта корзины */
export interface CartState {
  status: string;
  error: null | string;
  cart: Product[];
  totalPrice: number
}
