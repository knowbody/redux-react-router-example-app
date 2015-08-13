import * as types from './../constants/ActionTypes';

export function fetchPosts(start = 0, limit = 10) {
  return async (dispatch) => {
    const { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } = types;

    dispatch({
      type: [FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE],
      meta: {
        fetch: [`/post?_start=${start}&_limit=${limit}`, {method: 'get'}]
      }
    });
  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    const { auth } = getState();
    const { CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE } = types;

    post.user = auth.user.id;

    dispatch({
      type: [CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE],
      payload: post,
      meta: {
        fetch: ['/post', {method: 'post', body: JSON.stringify(post)}]
      }
    });
  };
}

export function readPost(id) {
  return async (dispatch) => {
    const { READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE } = types;

    dispatch({
      type: [READ_POST, READ_POST_SUCCESS, READ_POST_FAILURE],
      meta: {
        fetch: [`/post/${id}`, {method: 'get'}]
      }
    });
  };
}

export function updatePost(post) {
  return async (dispatch) => {
    const { UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE } = types;

    dispatch({
      type: [UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE],
      payload: post,
      meta: {
        fetch: [`/post/${post.id}`, {method: 'put', body: JSON.stringify(post)}]
      }
    });
  };
}

/**
 * Deletes a post
 * @param post
 * @returns {Function}
 */
export function removePost(post) {
  return async (dispatch) => {
    const { REMOVE_POST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE } = types;

    dispatch({
      type: [REMOVE_POST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE],
      payload: post,
      meta: {
        fetch: [`/post/${post.id}`, {method: 'delete'}]
      }
    });
  };
}
/**
 * Action is used to set post as draft
 * @param postId
 * @returns {Function}
 */
export function setDraft(postId) {
  return (dispatch, getState) => {
    const { blogposts } = getState();

    const post = blogposts.filter(obj => obj.id === postId)[0];

    if (!post) return;

    dispatch({
      type: types.SET_DRAFT,
      payload: post
    });
  };
}

/**
 * Action to set current draft
 * @param {object} draft
 * @returns {{type: UPDATE_DRAFT, payload: {object}}}
 */
export function updateDraft(draft) {
  return {
    type: types.UPDATE_DRAFT,
    payload: draft
  };
}
