import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts, getTotalPrice } from "./features/Cart/selectors";
import { fetchProductsAsync } from "./features/Products/api";
import { getProducts } from "./features/Products/selectors";

import Products from "./features/Products/components/Products";
import Cart from "./features/Cart/components/Cart";

import "./App.css";

function App() {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const totalPrice = useSelector(getTotalPrice)
  const cartProducts = useSelector(getCartProducts)

  useEffect(() => {
    dispatch<any>(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <Products dispatch={dispatch} products={products} />
      <Cart dispatch={dispatch} cartProducts={cartProducts} totalPrice={totalPrice} />
    </div>
  );
}

export default App;