import { connect } from "react-redux";
import buyAction from "../actions/buyAction";
import Button from "../components/Button";

const mapStateToProps = () => {
  return {
    value: "Buy one"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clicked: () => {
      dispatch(buyAction(1));
    }
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default BuyAcorn;
