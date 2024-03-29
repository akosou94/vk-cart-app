import { FC } from 'react';
import { Product as TProduct } from '../types';

import { Dispatch } from '@reduxjs/toolkit';
import './Products.css';
import Product from './ Product/Product';

type Props = {
  dispatch: Dispatch
  products: TProduct[]
}

const Products: FC<Props> = ({dispatch, products }) => {
  const renderedProducts = products.map((product: TProduct) => {
    return (
      <Product product={product} dispatch={dispatch} key={product.id} />
    );
  });

  return (
    <div className='left'>
      <div className='products'>
        {renderedProducts && renderedProducts}
      </div>
    </div>
  )
}

export default Products