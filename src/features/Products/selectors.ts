import { RootState } from "../../store/store"

export const getProducts = (state: RootState) => state.products?.products

