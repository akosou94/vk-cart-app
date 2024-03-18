import { RootState } from "../../store/store"

/* Селектор для получения полной стоимости товаров в корзине */
export const getTotalPrice = (state: RootState) => state.cart?.totalPrice

/* Селектор для получения массива товаров в корзине */
export const getCartProducts = (state: RootState) => state.cart?.cart