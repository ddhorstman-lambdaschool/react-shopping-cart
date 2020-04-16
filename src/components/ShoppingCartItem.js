import React from "react";

const Item = (props) => {
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />
      <div>
        <h1>
          {props.title + (props?.quantity > 1 ? ` (${props.quantity})` : "")}
        </h1>
        <p>$ {props.price * (props.quantity ?? 1)}</p>
        {props?.quantity > 1 ? (
          <>
            <button onClick={() => props.updateQuantity(props.quantity - 1)}>
              Remove One
            </button>
            <button onClick={props.removeItem}>Remove All</button>
          </>
        ) : (
          <button onClick={props.removeItem}>Remove from cart</button>
        )}
      </div>
    </div>
  );
};

export default Item;
