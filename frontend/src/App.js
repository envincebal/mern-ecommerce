import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavigationBar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import AboutPage from "./components/AboutPage/AboutPage";
import CartPage from "./components/CartPage/CartPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={ProductsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
