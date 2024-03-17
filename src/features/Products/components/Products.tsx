import { FC } from 'react';
import { Product } from '../types';
import './Products.css';
import Buttons from '../../../components/UI/Buttons/Buttons';
import { useDispatch } from 'react-redux';

type Props = {
  products: Product[]
}

const Products: FC<Props> = ({ products }) => {
  const dispatch = useDispatch()

  const renderedProducts = products.map((product: Product, index: number) => {
    return (
      <div key={product.id} className='product'>
        <ul>
          <li>
            <img src={product.image} width={200} height={200} alt="product" className='product-image' />
          </li>
          <li className='product-title'>
            <p><b>Название товара: </b></p>
            <span>{product.title}</span>
          </li>
          <li className='product-description'>
            <p><b>Описание: </b><span>{product.description}</span></p>
          </li>
          <li>
            <p><b>Цена: </b><span>{product.price}</span>
            </p>
          </li>
        </ul>
        <Buttons dispatch={dispatch} product={product} />
      </div>
    );
  });

  return (
    <>
      <h2>Список товаров</h2>
      <div className='products'>
        {renderedProducts && renderedProducts}
      </div>
    </>
  )
}

export default Products