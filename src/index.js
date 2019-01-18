import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import App from "../components/App";
import Store from "./Store";
import { Provider } from "react-redux";
import Home from "../components/Home";
import Redux from "../components/Redux";
import States from "../components/States"

ReactDOM.render(
  <Router>
    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/simple/states" component={States} />
        <Route path="/simple/redux" component={Redux} />
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
