import * as urls from '../config/urls';
import * as types from './../constants/ActionTypes';
import {load} from './utils/fetch';

export function fetchUsers() {
  return async (dispatch) => {
    const response = await load(`${urls.api}/user`);
    const posts = await response.json();

    dispatch({
      type: types.FETCH_USERS,
      payload: posts
    });
  };
}
