import React from "react";

import "./CartPage.css";

const CartPage = (props) => {
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
          <div className="item">
            <p>Product</p>
            <p>
              <i class="bi bi-dash-square-fill minus-item"></i>
              1
              <i class="bi bi-plus-square-fill add-item"></i>
            </p>
            <p>Price</p>
            <p>Delete</p>
          </div>
          <div className="item">
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Delete</p>
          </div>
        </div>
        <div className="order-summary">
          <h5>Order Summary</h5>
          <hr />
          <h6>Items</h6>
          <p>0</p>
          <h6>Total Price</h6>
          <p>$1.00</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
