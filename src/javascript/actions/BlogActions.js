import * as urls from '../config/urls';
import * as types from './../constants/ActionTypes';
import {load} from './utils/fetch';

export function fetchPosts(start = 0, limit = 10) {
  return async (dispatch) => {
    const response = await load(`${urls.api}/post?_start=${start}&_limit=${limit}`);
    const posts = await response.json();

    dispatch({
      type: types.FETCH_POSTS,
      payload: posts
    });
  };
}

export function addPost(post) {
  return (dispatch, getState) => {
    const { auth } = getState();

    post.user = auth.user.id;

    dispatch({
      type: types.ADD_POST,
      payload: post
    });
  };
}

export function updatePost(post) {
  return {
    type: types.UPDATE_POST,
    payload: post
  };
}

export function editPost(postId) {
  return (dispatch, getState) => {
    const { blogposts } = getState();

    const post = blogposts.filter(obj => obj.id === postId)[0];

    if (!post) return;

    dispatch({
      type: types.EDIT_POST,
      payload: post
    });
  };
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
