import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Navbar.css";

export const NavigationBar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Link to={"/"}>
        <Navbar.Brand className="main-title">Tech Store</Navbar.Brand>
      </Link>
      <Nav className="mr-auto"></Nav>
      {/* {user && (  */}
      <div className="nav-links">
        <Link to={"/"}>
          <Button className="link-item" variant="link">
            Home
          </Button>
        </Link>
        <Link to={"/products"}>
          <Button className="link-item" variant="link">
            Products
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button className="link-item" variant="link">
            About
          </Button>
        </Link>
        <div className="cart-div">
          <Link to={"/cart"}>
            <i className="bi bi-cart2 link-item"></i>
          </Link>
          <span className="cart-counter">0</span>
        </div>

        <Link to="/">
          <Button
            className="link-item"
            variant="danger"
            onClick={() => this.onLogOut()}
          >
            Log Out
          </Button>
        </Link>
      </div>
      {/* // )} */}
    </Navbar>
  );
};

export default NavigationBar;
