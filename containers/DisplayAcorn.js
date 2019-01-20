import { connect } from 'react-redux';
import DisplayRedux from '../components/DisplayRedux';

const mapStateToProps = state => {
  return {
    value: state.acornReducer.counter,
  }
}

const DisplayAcorn = connect(
  mapStateToProps)(DisplayRedux);

export default DisplayAcorn;
