import { FC } from 'react'

import './Cart.css'
import { Product } from '../../Products/types'

type Props = {
  cartProducts: Product[]
  totalPrice: number
}

const Cart: FC<Props> = ({cartProducts, totalPrice}) => {

  return (
    <div className="right">
        <h2>Корзина</h2>
      <div className='cart-products'>
        <div>
          <ol>
          {cartProducts.map((cartProduct) => (
              <li className='cart-product-item'>
                <img src={cartProduct.image} alt="cart-product-img" className='cart-product-img'/>
                <p>{cartProduct.title}</p>
                <p><b>{cartProduct.price}</b> руб.</p>
              </li>
          ))}
          </ol>
        </div>
      </div>
        <p className='total-price'>Итого: <b>{totalPrice}</b> руб.</p>
      </div>
  )
}

export default Cart