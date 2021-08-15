import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  return (
    <div className="item">
      <p>{props.name}</p>
      <p>
        <i
          className="bi bi-dash-square-fill minus-item"
          onClick={() => {
            props.setCartCount(props.minusItem);
          }}
        ></i>
        1
        <i
          className="bi bi-plus-square-fill add-item"
          onClick={() => {
            props.setCartCount(props.addItem);
          }}
        ></i>
      </p>
      {console.log(props)}
      <p>{props.price}</p>
      <p>Delete</p>
    </div>
  );
};

export default CartItem;
