import { RootState } from "../../store/store"

export const getTotalPrice = (state: RootState) => state.cart?.totalPrice