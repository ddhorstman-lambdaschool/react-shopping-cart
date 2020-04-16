import React from "react";

// Components
import Item from "./ShoppingCartItem";
import CartContext from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cart, removeItem, updateQuantity } = React.useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price * (value.quantity ?? 1);
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="shopping-cart">
      {cart.map((item) => (
        <Item
          key={item.id}
          {...item}
          removeItem={() => removeItem(item.id)}
          updateQuantity={updateQuantity(item.id)}
        />
      ))}

      <div className="shopping-cart__checkout">
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
