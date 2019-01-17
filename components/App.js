import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    let { counter } = this.state;
    this.setState({ counter: ++counter });
  };

  decreaseCounter = () => {
    let { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: --counter });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 38) {
        this.incrementCounter();
      } else if (e.keyCode === 40) {
        this.decreaseCounter();
      }
    });
  }

  render() {
    let { counter } = this.state;
    return (
      <div>
        <Button clicked={this.incrementCounter} value="Buy one" />
        <Display>
          <h1>{counter} 🌰</h1>
        </Display>
        <Button clicked={this.decreaseCounter} value="Eat one" />
      </div>
    );
  }
}

export default App;
