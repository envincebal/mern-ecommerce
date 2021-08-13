import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavigationBar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import AboutPage from "./components/AboutPage/AboutPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import CartPage from "./components/CartPage/CartPage";
import ProductDetails from "./components/ProductDetails/ProductDetails";


function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar count={cartCount} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/:details" render={() => <ProductDetails setCartCount={setCartCount} />} />

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
