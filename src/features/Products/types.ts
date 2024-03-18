/* Интерфейс для стейта товаров */
export interface ProductsState {
  status: string;
  error: null | string;
  products: Product[];
}

/* Тип для товара */
export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
  quantity: number
}