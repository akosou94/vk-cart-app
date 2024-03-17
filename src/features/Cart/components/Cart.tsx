import { FC } from 'react'
import { FaShoppingCart } from 'react-icons/fa';


import './Cart.css'
import { Product } from '../../Products/types'
import { handleDeleteFromCart } from '../actions';
import { Dispatch } from '@reduxjs/toolkit';

type Props = {
  dispatch: Dispatch
  cartProducts: Product[]
  totalPrice: number
}

const Cart: FC<Props> = ({ dispatch, cartProducts, totalPrice }) => {
  return (
    <div className="right">
      <h2>Корзина</h2>
      <div className='cart-products'>
          <ul>
            {cartProducts.map((cartProduct, index) => (
              <li className='cart-product-item'>
                <div>
                  <img src={cartProduct.image} alt="cart-product-img" className='cart-product-img' />
                  <p>{cartProduct.title}</p>
                  <p><b>{cartProduct.price}</b> руб.</p>
                </div>
                <div>
                  <button className='button' onClick={() => handleDeleteFromCart(dispatch, cartProduct)}><FaShoppingCart /></button>
                </div>
              </li>
            ))}
          </ul>
      </div>
      <hr className='horizontal-line' />
      <p className='total-price'>Итого: <b>{totalPrice}</b> руб.</p>
    </div>
  )
}

export default Cart