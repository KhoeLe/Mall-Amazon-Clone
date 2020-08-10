import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>This from check out  Helllo git</h1>
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
