import * as urls from '../config/urls';
import * as types from './../constants/ActionTypes';
import {read, create, update, destroy} from './utils/fetch';

export function fetchPosts(start = 0, limit = 10) {
  return async (dispatch) => {
    const response = await read(
        `${urls.api}/post?_start=${start}&_limit=${limit}`
    );
    const posts = await response.json();

    dispatch({
      type: types.FETCH_POSTS,
      payload: posts
    });
  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    const { auth } = getState();

    post.user = auth.user.id;

    dispatch({
      type: types.CREATE_POST,
      payload: post
    });

    const response = await create(`${urls.api}/post`, post);

    if (response.status === 201) {
      post = await response.json();

      dispatch({
        type: types.CREATE_POST_SUCCESS,
        payload: post
      });
    } else {
      dispatch({
        type: types.CREATE_POST_FAILURE,
        payload: post
      });
    }
  };
}

export function updatePost(post) {
  return async (dispatch) => {
    dispatch({
      type: types.UPDATE_POST,
      payload: post
    });

    const response = await update(`${urls.api}/post/${post.id}`, post);

    if (response.status === 200) {
      post = await response.json();

      dispatch({
        type: types.UPDATE_POST_SUCCESS,
        payload: post
      });
    } else {
      dispatch({
        type: types.UPDATE_POST_FAILURE,
        payload: post
      });
    }
  }
}

/**
 * Deletes a post
 * @param post
 * @returns {Function}
 */
export function removePost(post) {
  return async (dispatch) => {
    dispatch({
      type: types.REMOVE_POST,
      payload: post
    });

    const { status } = await destroy(`${urls.api}/post/${post.id}`);

    if (status === 200) {
      dispatch({
        type: types.REMOVE_POST_SUCCESS,
        payload: post
      });
    } else {
      dispatch({
        type: types.REMOVE_POST_FAILURE,
        payload: post
      });
    }
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
