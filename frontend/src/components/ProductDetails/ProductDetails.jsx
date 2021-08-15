import React from "react";
import "./ProductDetails.css";
import { useLocation } from "react-router-dom";
const ProductDetails = (props) => {
  const location = useLocation();
  const products = JSON.parse(localStorage.getItem("data"));
  const productInfo = products.find(
    (item) => item.name === location.state.name
  );
  const { name, image, price } = productInfo;

  const cartCounter = (counter) => {
    props.setCartCount((counter += 1));
  };

  const cartPriceCounter = (counter) => {
    props.setCartTotal((counter += price));
  };

  const addItemToCart = () => {

    const product = {
      name,
      price,
    };
    if(!props.cartItems.find(e => e.name === product.name)){
      props.setCartItems([...props.cartItems, product]);
    }

   console.log(props.cartItems)
  };



  return (
    <div className="details-container">
      <div className="details-card">
        <img className="details-img" src={image} alt={name} />
        <div className="details-div">
          <h3 className="details-title">{name}</h3>
          <p className="details-price">${price}</p>
          <button
            className="add-to-cart"
            onClick={() => {
              props.setCartCount(cartCounter);
              props.setCartTotal(cartPriceCounter);
              props.setCartItems(addItemToCart);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
