import { FC } from 'react'

type Props = {
  totalPrice: number
}

const Cart: FC<Props> = ({totalPrice}) => {
  return (
    <div className="right">
        <h2>Корзина</h2>
        Итого: {totalPrice} руб.
      </div>
  )
}

export default Cart