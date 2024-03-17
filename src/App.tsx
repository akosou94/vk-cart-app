import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchProductsAsync } from "./features/Products/api";
import { RootState } from "./store/store";
import { addToCart, removeFromCart } from "./features/Cart/slice";

function App() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state?.products?.products)
  const cart = useSelector((state: RootState) => state?.cart.cart)
  const totalPrice = cart.reduce((accum: number, product: any) => accum + product.price, 0).toFixed(2);

  console.log(products, ' products');
  console.log(cart, ' cart');
  console.log(totalPrice, ' totalPrice');


  const renderedProducts = products.map((product: any) => {
    return (
      <div>
        <ul key={product.id}>
          <li>
            <img src={product.image} width={100} height={100} alt="product" />
          </li>
          <li>
            {product.id}
          </li>
          <li>
            {product.title}
          </li>
          <li>
            {product.price}
          </li>

        </ul>
        <div>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
          <button onClick={() => dispatch(removeFromCart(product.id))}>-</button>
          <button>удалить</button>
        </div>
      </div>
      );
  });

  useEffect(() => {
    dispatch<any>(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="left">
        <h2>Список товаров</h2>
        {renderedProducts && renderedProducts}
      </div>
      <div className="right">
        <h2>Корзина</h2>
        Итого: {totalPrice} руб.
      </div>
    </div>
  );
}

export default App;