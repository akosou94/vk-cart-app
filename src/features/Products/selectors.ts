import { RootState } from "../../store/store"

/* Селектор для получения массива товаров для листинга */
export const getProducts = (state: RootState) => state.products?.products

