import * as urls from '../config/urls';
import * as types from './../constants/ActionTypes';
import {read} from './utils/fetch';

export function fetchUsers() {
  return async (dispatch) => {
    const response = await read(`${urls.api}/user`);
    const posts = await response.json();

    dispatch({
      type: types.FETCH_USERS,
      payload: posts
    });
  };
}
