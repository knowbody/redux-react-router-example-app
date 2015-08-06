import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

const reducer = combineReducers(reducers);

function logger({ getState }) {
  return (next) => (action) => {
    console.log('Dispatching: ', action);

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}


// create a store that has redux-thunk middleware enabled
const finalCreateStore = compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    createStore
);

export const store = finalCreateStore(reducer);