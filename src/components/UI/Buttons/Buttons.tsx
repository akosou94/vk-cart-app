import { Dispatch } from '@reduxjs/toolkit'
import { handleAddToCart, handleDeleteFromCart, handleRemoveFromCart } from '../../../features/Cart/actions'
import { FaShoppingCart } from 'react-icons/fa';
import './Buttons.css'
import { FC } from 'react'
import { Product } from '../../../features/Products/types'

type Props = {
  dispatch: Dispatch,
  product: Product,
}

const Buttons:FC<Props> = ({dispatch, product}) => {
  return (
    <div className='buttons'>
      <div className='buttons'>
          <button className='button button-add' onClick={() => handleAddToCart(dispatch, product)}>+</button>
          <button className='button button-remove' onClick={() => handleRemoveFromCart(dispatch, product.id)}>-</button>
      </div>
      <div>
          <button className='button' onClick={() => handleDeleteFromCart(dispatch, product)}><FaShoppingCart/></button>
      </div>
    </div>
  )
}

export default Buttons