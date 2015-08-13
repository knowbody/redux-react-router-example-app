/**
 * Logs previous and current state for every action call
 * @param getState
 * @returns {Function}
 */
export default function logger({ getState }) {
  return (next) => (action) => {
    console.log('dispatching', action);// eslint-disable-line
    const result = next(action);

    console.log('next state', getState());// eslint-disable-line
    return result;
  };
}
