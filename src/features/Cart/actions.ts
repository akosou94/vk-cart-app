import { Dispatch } from "@reduxjs/toolkit"
import { addToCart, deleteFromCart, removeFromCart } from "./slice"
import { Product } from "../Products/types"

export const handleAddToCart = (dispatch: Dispatch, product: Product) => {
  dispatch(addToCart(product))
}

export const handleRemoveFromCart = (dispatch: Dispatch, productId: number) => {
  dispatch(removeFromCart(productId))
}

export const handleDeleteFromCart = (dispatch: Dispatch, product: Product) => {
  dispatch(deleteFromCart(product.id))
}