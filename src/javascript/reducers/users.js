import * as types from '../constants/ActionTypes';

const initialState = [];

export default function user(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case types.FETCH_USERS:
    return [...payload];

  default:
    return state;
  }
}
