import { Dispatch } from "@reduxjs/toolkit"
import { addToCart, clearCart, deleteFromCart, removeFromCart } from "./slice"
import { Product } from "../Products/types"

/* Метод для добавления 1 шт товара в корзину */
export const handleAddToCart = (dispatch: Dispatch, product: Product) => {
  dispatch(addToCart(product))
}

/* Метод для удаления 1 шт товара из корзины */
export const handleRemoveFromCart = (dispatch: Dispatch, productId: number) => {
  dispatch(removeFromCart(productId))
}

/* Метод для удаления товара из корзины полностью */
export const handleDeleteFromCart = (dispatch: Dispatch, index: number) => {
  dispatch(deleteFromCart(index))
}

/* Очистить корзину */
export const handleClearCart = (dispatch: Dispatch) => {
  dispatch(clearCart([]))
}