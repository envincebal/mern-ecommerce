import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img className="product-image" src={props.image} alt={props.name} />
      <hr />
      <div className="product-details">
        <h6>{props.name}</h6>
        <p> ${props.price}</p>
        <Link  style={{ textDecoration: 'none' }}
          to={{
            pathname: `/${props.name}`,
            state: { name: props.name }
          }}>
            <button className="view-item-button">View Item</button>
            </Link>
      </div>
    </div>
  );
};

export default ProductCard;
