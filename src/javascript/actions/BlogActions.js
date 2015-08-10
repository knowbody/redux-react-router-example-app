import * as types from './../constants/ActionTypes'

const catImg = 'http://thecatapi.com/api/images/get?type=jpg';
const rnd = Math.random;

// Structure based on https://github.com/acdlite/flux-standard-action
export function addPost(post) {
  return (dispatch, getState) => {
    const { user } = getState();

    post.user = user;

    dispatch({
      type: types.ADD_POST,
      payload: post
    });
  }
}

export function removePost(post) {
  return {
    type: types.REMOVE_POST,
    payload: post
  }
}

export function updateDraft(draft) {
  return {
    type: types.UPDATE_DRAFT,
    payload: draft
  }
}