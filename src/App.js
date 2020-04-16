import React from "react";
import { Route } from "react-router-dom";
import data from "./data";

import useLocalStorage from "./hooks/useLocalStorage";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [products] = React.useState(data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (idxToRemove) => {
    const newCart = [];
    for (let i = 0; i < cart.length; i++) {
      if (i !== idxToRemove) newCart.push(cart[i]);
    }
    setCart(newCart);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
