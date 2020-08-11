import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route  path="/login">
            <Header /> 
            <h1>This from login</h1>
          </Route>
          <Route  path="/">
                <Header />
                <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
