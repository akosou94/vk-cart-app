import { FC } from 'react';
import { Product } from '../types';

import Buttons from '../../../components/UI/Buttons/Buttons';

import { Dispatch } from '@reduxjs/toolkit';
import './Products.css';

type Props = {
  dispatch: Dispatch
  products: Product[]
}

const Products: FC<Props> = ({dispatch, products }) => {

  const renderedProducts = products.map((product: Product, index: number) => {
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
    );
  });

  return (
    <>
      {/* <h2>Список товаров</h2> */}
      <div className='products'>
        {renderedProducts && renderedProducts}
      </div>
    </>
  )
}

export default Products