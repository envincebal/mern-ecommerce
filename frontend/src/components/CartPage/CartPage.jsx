import React from "react";

import CartItem from "../CartItem/CartItem";
import "./CartPage.css";

const CartPage = (props) => {
  const minusItem = (counter) => {
    props.setCartCount((counter -= 1));
  };
  const addItem = (counter) => {
    props.setCartCount((counter += 1));
  };

  return (
    <div className="cart-page">
      <h3 className="cart-title">Shopping Cart</h3>
      <div className="cart-info">
        <div className="items-container">
          <div className="items-header">
            <h5>PRODUCT</h5>
            <h5>QUANTITY</h5>
            <h5>PRICE</h5>
          </div>
          {props.cartItems.map((item, id) => {
            return (
              <CartItem
                key={id}
                name={item.name}
                price={item.price}
                setCartCount={props.setCartCount}
                minusItem={minusItem}
                addItem={addItem}
                setCartTotal={props.setCartTotal}
              />
            );
          })}
        </div>
        <div className="order-summary">
          <h5>Order Summary</h5>
          <hr />
          <h6>Items</h6>
          <p>{props.cartCount}</p>
          <h6>Total Price</h6>
          <p>${props.cartTotal}</p>
          <button>Checkout</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartPage;
