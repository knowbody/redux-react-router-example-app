import * as types from './ActionTypes'

// Structure based on https://github.com/acdlite/flux-standard-action

export function addPost(title, intro, body) {
  return {
    type: types.ADD_POST,
    payload: {
      title,
      intro,
      body
    }
  }
}

export function removePost(id) {
  return {
    type: types.REMOVE_POST,
    payload: {
      id
    }
  }
}