import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import App from "../components/App";
import Store from "../src/Store";
import { Provider } from "react-redux";

const Redux = () => (
  <div>
    <Provider store={Store}>
      <App />
    </Provider>
    <Link to={`/simple/states`}>With States</Link>
    <div />
    <Link to={`/`}>Go Home</Link>
  </div>
);

export default Redux;
