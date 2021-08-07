import React from "react";

import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="product-image" src={props.image} alt={props.name} />
      <hr />
      <div className="product-details">
        <h6>{props.name}</h6>
        <p> ${props.price}</p>
        <button>Go somewhere</button>
      </div>
    </div>
  );
};

export default ProductCard;
