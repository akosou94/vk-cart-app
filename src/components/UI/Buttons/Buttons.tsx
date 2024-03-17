import { Dispatch } from '@reduxjs/toolkit';
import { FC } from 'react';
import { handleAddToCart, handleRemoveFromCart } from '../../../features/Cart/actions';
import { Product } from '../../../features/Products/types';
import { FaPlus, FaMinus } from 'react-icons/fa';

import './Buttons.css';
import Button from '../Button/Button';

type Props = {
  dispatch: Dispatch,
  product: Product,
}

const Buttons:FC<Props> = ({dispatch, product}) => {
  return (
      <div className='buttons'>
          <Button className='button button-add' onClick={() => handleAddToCart(dispatch, product)}><FaPlus /></Button>
          <Button className='button button-remove' onClick={() => handleRemoveFromCart(dispatch, product.id)}><FaMinus /></Button>
      </div>
  )
}

export default Buttons