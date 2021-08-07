import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../ProductCard/ProductCard";

import "./ProductsPage.css";

const ProductsPage = () => {
  const [productItems, setProductItems] = useState([]);

  const getProducts = () => {
    axios("http://localhost:8000/products").then((res) => {
      const products = res.data;

      setProductItems(products);
    });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="items-div">
              {productItems.map(product => {
        return (
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </div>
      </div>

  );
};

export default ProductsPage;
