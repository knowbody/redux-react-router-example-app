const FETCH_USERS = 'users/FETCH_USERS';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_USERS:
    return [...payload];

  default:
    return state;
  }
}

import * as urls from '../../config/urls';
import {read} from './utils/fetch';

export function fetchUsers() {
  return async (dispatch) => {
    const response = await read(`${urls.api}/user`);
    const posts = await response.json();

    dispatch({
      type: FETCH_USERS,
      payload: posts
    });
  };
}
