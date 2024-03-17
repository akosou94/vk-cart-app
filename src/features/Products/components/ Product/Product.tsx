import { FC } from 'react'
import { Product as TProduct } from '../../types'
import { Dispatch } from '@reduxjs/toolkit'
import Buttons from '../../../../components/UI/Buttons/Buttons'

import './Product.css'

type Props = {
  dispatch: Dispatch
  product: TProduct
}

const Product: FC<Props> = ({dispatch, product}) => {
  return (
    <div key={product.id} className='product'>
        <ul>
          <li>
            <img src={product.image} width={200} height={200} alt="product" className='product-image' />
          </li>
          <li className='product-title'>
            <p><b>Название товара: </b></p>
            <p className='product-title-text'>{product.title}</p>
          </li>
          <li className='product-description'>
            <span><b>Описание: </b></span>
            <p className='product-description-text'>{product.description}</p>
          </li>
        </ul>
          <div className='product-price'>
            <p><b>Цена: </b><span>{product.price} руб.</span></p>
          </div>
        <Buttons dispatch={dispatch} product={product} />
      </div>
  )
}

export default Product
