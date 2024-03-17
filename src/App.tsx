import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Cart from "./features/Cart/components/Cart";
import { getTotalPrice } from "./features/Cart/selectors";
import { fetchProductsAsync } from "./features/Products/api";
import Products from "./features/Products/components/Products";
import { getProducts } from "./features/Products/selectors";

function App() {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const totalPrice = useSelector(getTotalPrice)

  useEffect(() => {
    dispatch<any>(fetchProductsAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="left">
        <Products products={products} />
      </div>
      <Cart totalPrice={totalPrice} />
    </div>
  );
}

export default App;