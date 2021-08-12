import React from 'react';
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="welcome-container">
        <h1>TECH STORE</h1>
        <p>GO AND GET YOUR TECH ON!!!</p>
        <Link to={"/products"}>
        <button className="shop-now">Shop Now</button>
        </Link>

      </div>
    </div>
  )
}

export default HomePage;