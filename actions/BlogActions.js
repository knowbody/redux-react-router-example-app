import * as types from '../constants/ActionTypes';

export default function addPost(title, intro, body) {
  return {
    type: types.ADD_POST,
    title,
    intro,
    body
  }
}

export default function removePost(id) {
  return {
    type: types.REMOVE_POST,
    id
  }
}
