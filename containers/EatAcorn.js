import { connect } from "react-redux";
import eatAction from "../actions/eatAction";
import Button from "../components/Button";

const mapStateToProps = () => {
  return {
    value: "Eat one"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clicked: () => {
      dispatch(eatAction(1));
    }
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default EatAcorn;
