import React from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Link to={"/"}>
      <Navbar.Brand className="main-title">Daily Journal</Navbar.Brand>
    </Link>
    <Nav className="mr-auto">
    </Nav>
    {/* {user && (  */}
      <div>
        <Link to={"/profile"}>
          <Button variant="secondary">New Entry +</Button>
        </Link>
        <Link to="/">
          <Button variant="danger" onClick={() => this.onLogOut()}>Log Out</Button>
        </Link>
      </div>
    {/* // )} */}
  </Navbar> 
  )
}
