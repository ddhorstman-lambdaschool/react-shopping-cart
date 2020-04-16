import React from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../contexts/CartContext";

const Navigation = () => {
  const { cart } = React.useContext(CartContext);
  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart{" "}
        <span>{cart.reduce((ac, val) => ac + (val.quantity ?? 1), 0)}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
