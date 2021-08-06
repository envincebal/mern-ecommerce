import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavigationBar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ContactPage from "./components/ContactPage/ContactPage";
import CartPage from "./components/CartPage/CartPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
