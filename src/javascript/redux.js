import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './reducers';
import middleware from './config/middleware';

const reducer = combineReducers(reducers);

// create a store that has redux-thunk middleware enabled
const finalCreateStore = compose.apply(this, middleware.map(md =>
  applyMiddleware(md)).concat([createStore]));

export const store = finalCreateStore(reducer);
