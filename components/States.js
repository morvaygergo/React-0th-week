import React, { Component } from "react";
import Button from "./Button";
import DisplayStates from "./DisplayStates";

class States extends Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  state = {
    counter: 0
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.keyCode === 38) {
      this.incrementCounter();
    } else if (event.keyCode === 40) {
      this.decreaseCounter();
    }
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
      </div>
    );
  }
}

export default States;
