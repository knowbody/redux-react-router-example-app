import * as types from '../constants/ActionTypes';

export function addPost(title, intro, body) {
  return {
    type: types.ADD_POST,
    title,
    intro,
    body
  }
}

export function removePost(id) {
  return {
    type: types.REMOVE_POST,
    id
  }
}
