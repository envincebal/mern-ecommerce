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

  const filterProducts = (e) => {
    const target = e.target.className;
    axios("http://localhost:8000/products").then((res) => {
      const products = res.data;

      if (target === "PC")
        productItems.filter((item) => {
          return setProductItems(item.category === target);
        });
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="aside-bar">
          <h3>Categories</h3>
          <p className="all">All</p>
          <p className="PC" onClick={filterProducts}>
            Gaming PCs
          </p>
          <p>Smartphones</p>
        </div>
        {console.log(productItems)}
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
