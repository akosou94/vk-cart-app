import { Product } from "../Products/types";

export interface CartState {
  status: string;
  error: null | string;
  cart: Product[];
  totalPrice: number
  quantity: number
}
