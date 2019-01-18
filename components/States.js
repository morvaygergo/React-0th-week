import React, { Component } from "react";
import Button from "./Button";
import DisplayStates from "./DisplayStates";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class States extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 38) {
        this.incrementCounter();
      } else if (e.keyCode === 40) {
        this.decreaseCounter();
      }
    });
  }

  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };

  decreaseCounter = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1 });
    }
  };

  render() {
    return (
      <div>
        <Button clicked={this.incrementCounter} value="Buy one" />
        <DisplayStates>
          <h1>{this.state.counter} 🌰</h1>
        </DisplayStates>
        <Button clicked={this.decreaseCounter} value="Eat one" />
        <div />
        <Link to={`/simple/redux`}>With Redux</Link>
        <div />
        <Link to={`/`}>Go Home</Link>
      </div>
    );
  }
}

export default States;
