import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from '../reducers/combinedReducer';

const Store = createStore(combinedReducer, composeWithDevTools());

export default Store;
