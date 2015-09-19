import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducers';
import middleware from './middleware';

const reducer = combineReducers(reducers);

const finalCreateStore = compose(
 applyMiddleware.apply(this, middleware)
)(createStore);

export const store = finalCreateStore(reducer);
