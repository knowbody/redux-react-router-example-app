import thunk from 'redux-thunk';

/**
 * Logs previous and current state for every action call
 * @param getState
 * @returns {Function}
 */
function logger({ getState }) {
  return (next) => (action) => {
    console.log('Dispatching: ', action);

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}

export default [thunk, logger];
