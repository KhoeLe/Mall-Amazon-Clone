import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { useStateValue } from "./Components/StateProvider"
import { auth } from "./Components/firebase"
function App() {

const [{ user}, dispatch ] = useStateValue();

    //useEffect  <<<<< sử dụng năng cao cho APP
    // Có dk nhất định để run code

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) =>{
        if(authUser){
          // xác thực đc user login page


          dispatch({
            type: "SET_USER",
            user: authUser,
          });
        } else {
              // xác thực user logged out ...
            dispatch({
            type: "SET_USER",
            user: null,
          });
        }

      });
      return () => {
          // any xóa data 
        unsubscribe();
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("User IS >>>>>>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route  path="/login">
            <Login />
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
