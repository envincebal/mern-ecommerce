import React from "react";
import "./ProductDetails.css";

const ProductDetails = (props) => {
  return (
    <div className="details-container">
      <div className="details-card">
        <img className="details-img" src="https://github.com/envincebal/mern-ecommerce/blob/master/frontend/src/img/products/Acer_Nitro_50.jpg?raw=true" alt="PC" />
        <div className="details-div">
          <h3 className="details-title">Acer_Nitro_50</h3>
          <p className="details-price">$2399.00</p>
          <button className="add-to-cart">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
