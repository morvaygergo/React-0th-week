import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../components/Home";
import Redux from "../components/Redux";
import States from "../components/States";
import Store from "../src/Store";
import { Provider } from "react-redux";
import App from "../components/App";

ReactDOM.render(
  <Router>
    <Provider store={Store}>
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/simple/states" component={States} />
        <Route path="/simple/redux" component={Redux} />
      </App>
    </Provider>
  </Router>,
  document.getElementById("root")
);
