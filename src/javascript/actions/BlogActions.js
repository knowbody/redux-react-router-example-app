import * as types from './ActionTypes'

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