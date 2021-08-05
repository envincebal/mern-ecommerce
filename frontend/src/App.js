import {BrowserRouter as Router} from "react-router-dom";

import {NavigationBar} from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
      </Router>

    </div>
  );
}

export default App;
