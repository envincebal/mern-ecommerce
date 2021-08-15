import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ProfilePage from "./components/CartItem/CartItem";
import CartPage from "./components/CartPage/CartPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0.00);

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar count={cartCount} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route
            exact
            path="/cart"
            render={() => {
              return (
                <CartPage
                  setCartCount={setCartCount}
                  cartItems={cartItems}
                  cartTotal={cartTotal}
                  cartCount={cartCount}
                />
              );
            }}
          />
          <Route
            exact
            path="/:details"
            render={() => (
              <ProductDetails
                cartItems={cartItems}
                setCartItems={setCartItems}
                setCartCount={setCartCount}
                setCartTotal={setCartTotal}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
