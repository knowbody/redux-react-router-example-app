import * as types from './../constants/ActionTypes';

export function addPost(post) {
  return (dispatch, getState) => {
    const { user } = getState();

    post.user = user;

    dispatch({
      type: types.ADD_POST,
      payload: post
    });
  };
}

export function updatePost(post) {
  return (dispatch, getState) => {
    const { user } = getState();

    dispatch({
      type: types.UPDATE_POST,
      payload: post
    });
  }
}

export function editPost(postId) {
  return (dispatch, getState) => {
    const { blogposts } = getState();

    const post = blogposts.filter(post => post.id === postId)[0];

    if (!post) return;

    dispatch({
      type: types.EDIT_POST,
      payload: post
    });
  }
}

export function removePost(post) {
  return {
    type: types.REMOVE_POST,
    payload: post
  };
}

export function updateDraft(draft) {
  return {
    type: types.UPDATE_DRAFT,
    payload: draft
  };
}
