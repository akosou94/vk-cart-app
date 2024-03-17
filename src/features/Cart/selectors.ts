import { RootState } from "../../store/store"

export const getTotalPrice = (state: RootState) => state.cart?.totalPrice

export const getCartProducts = (state: RootState) => state.cart?.cart