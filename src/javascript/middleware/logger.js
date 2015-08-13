/**
 * Logs previous and current state for every action call
 * @param getState
 * @returns {Function}
 */
export default function logger({ getState }) {
  return (next) => (action) => {
    console.log('Dispatching: ', action);// eslint-disable-line

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action);

    console.log('state after dispatch', getState());// eslint-disable-line

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}