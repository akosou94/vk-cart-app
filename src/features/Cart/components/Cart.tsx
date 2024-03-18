import { FC } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Product } from '../../Products/types'
import { handleClearCart, handleDeleteFromCart } from '../actions';
import { Dispatch } from '@reduxjs/toolkit';

import Button from '../../../components/UI/Button/Button';

import './Cart.css'

type Props = {
  dispatch: Dispatch
  cartProducts: Product[]
  totalPrice: number
}

const Cart: FC<Props> = ({ dispatch, cartProducts, totalPrice }) => {
  return (
    <div className="right">
      <h2 className='cart-products-title'>Корзина</h2>
      <div className='cart-products'>
          <ul>
            {cartProducts.map((cartProduct, index) => (
              <li className='cart-product-item' key={cartProduct.id}>
                <div>
                  <img src={cartProduct.image} alt="cart-product-img" className='cart-product-img' />
                  <p>{cartProduct.title}</p>
                  <p>{cartProduct.quantity} x <b>{cartProduct.price}</b> руб.</p>
                </div>
                <div>
                  <Button className='button' onClick={() => handleDeleteFromCart(dispatch, index)}><FaShoppingCart />
                  </Button>
                </div>
              </li>
            ))}
          </ul>
      </div>
      <hr className='horizontal-line' />
      <div className='total-block'>
        <p className='total-price'>Итого: <b>{totalPrice}</b> руб.</p>
        <Button className='button-total-clear' onClick={() => handleClearCart(dispatch)} title='очистить корзину' />
      </div>
    </div>
  )
}

export default Cart