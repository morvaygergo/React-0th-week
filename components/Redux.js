import React from "react";
import { connect } from "react-redux";
import BuyAcorn from "../containers/BuyAcorn";
import EatAcorn from "../containers/EatAcorn";
import DisplayAcorn from "../containers/DisplayAcorn";
import eatAction from "../actions/eatAction";
import buyAction from "../actions/buyAction";

class Redux extends React.Component {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    if (e.keyCode === 40) {
      this.props.eatAction(1);
    } else if (e.keyCode === 38) {
      this.props.buyAction(1);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <main>
        <BuyAcorn />
        <DisplayAcorn />
        <EatAcorn />
      </main>
    );
  }
}

const mapDispatchToProps = {
  eatAction,
  buyAction
};

export default connect(
  null,
  mapDispatchToProps
)(Redux);
