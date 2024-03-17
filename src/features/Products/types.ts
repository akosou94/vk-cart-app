export interface ProductsState {
  status: string;
  error: null | string;
  products: Product[];
}

export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  image: string,
}