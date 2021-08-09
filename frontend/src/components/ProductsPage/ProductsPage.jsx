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
    axios("http://localhost:8000/products")
    .then(res => {
      const target = e.target.className;
      const products = res.data;
      const filteredProducts = products.filter(
        (item) => item.category === target
      );

      if (target === "PC") {
        setProductItems(filteredProducts);
      }else if (target === "smartphone") {
        setProductItems(filteredProducts);
      }else{
        setProductItems(products);
      }
      
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
