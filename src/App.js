import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Checkout from "./Components/Checkout.js";
import Payment from "./Components/Payment.js";
import Login from "./Components/Login.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./Components/firebase";
import { useStateValue } from "./Components/StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51M1ZJKSDV4QWEARuBISsWpo4hSHJlOYRqn8bHW8HYkvjOSj5TdxCmjsvXZbesRJP3fNQ5Xyyf2SXg9RGHt7KINkZ00XdHRREof');

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <h1>hi this is payment page</h1> */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
