import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
import Checkout from "./Components/Checkout"
import Login from "./Components/Login"
import { useStateValue } from "./Components/StateProvider"
import { auth } from "./Components/firebase"
import Payment from "./Components/Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders"
const promise = loadStripe(
  "pk_test_51HQSUlLYbhqcdejB6yrfYV6t5oggmTLgdKTM6unV6csbepvxSF9FSnsrTEHZPwnQ0FMT7Ncvz0gqssLXupq0CvP400R8OQUZM4"
);

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
        <Switch>
          <Route path="/orders">
                <Header />
                <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route  path="/login">
            <Login />
          </Route>
          <Route  path="/payment">
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
          </Route>
          <Route path="/">
                <Header />
                <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
