import { combineReducers } from 'redux';
import acornReducer from './acornReducer';

const combinedReducer = combineReducers({
  acornReducer,
});

export default combinedReducer;
