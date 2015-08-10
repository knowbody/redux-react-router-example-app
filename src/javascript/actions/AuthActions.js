import * as types from './ActionTypes'

// Structure based on https://github.com/acdlite/flux-standard-action

export function login(username, password) {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOGIN,
      payload: {
        username,
        password
      }
    });

    // Do something async here then dispatch LOGIN_SUCCESS or LOGIN_FAILURE
    setTimeout(() => {
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: {
          username,
          password
        },
        meta: 'The optional meta property MAY be any type of value. It is \
             intended for any extra information that is not part of the payload.\
             It will still be accessible in the reduxer. You could e.g. use it for\
             some middleware to debug your code'
      });
    }, 1000);
  }
}

export function register(username, email, password) {
  return (dispatch, getState) => {
    dispatch({
      type: types.REGISTER,
      payload: {
        username,
        email,
        password
      }
    });

    // Do something async here then dispatch LOGIN_SUCCESS or LOGIN_FAILURE
    setTimeout(() => {
      dispatch({
        type: types.REGISTER_FAILURE,
        payload: new Error(),
        error: true
      });
    }, 1000);
  }
}