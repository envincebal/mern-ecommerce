import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../ProductCard/ProductCard";

import "./ProductsPage.css";

const ProductsPage = (props) => {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    axios("http://localhost:8000/products").then((res) => {
      const products = res.data;

      localStorage.setItem("data", JSON.stringify(products));

      setProductItems(products);
    });
  }, []);

  const filterProducts = (e) => {
    const target = e.target.className;
    const storedData = JSON.parse(localStorage.getItem("data"));
    const filteredProducts = storedData.filter(
      (item) => item.category === target
    );

    if (target === "PC") {
      setProductItems(filteredProducts);
    } else if (target === "smartphone") {
      setProductItems(filteredProducts);
    } else {
      setProductItems(storedData);
    }
  };

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="aside-bar">
          <h3>Categories</h3>
          <p className="all" onClick={filterProducts}>
            All
          </p>
          <p className="PC" onClick={filterProducts}>
            Gaming PCs
          </p>
          <p className="smartphone" onClick={filterProducts}>
            Smartphones
          </p>
        </div>
        <div className="items-div">
          {productItems.map((product) => {
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
    </div>
  );
};

export default ProductsPage;
