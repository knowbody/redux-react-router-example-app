const FETCH_POSTS = 'blogposts/FETCH_POSTS';
const FETCH_POSTS_SUCCESS = 'blogposts/FETCH_POSTS_SUCCESS';
const FETCH_POSTS_FAILURE = 'blogposts/FETCH_POSTS_FAILURE';

const CREATE_POST = 'blogposts/CREATE_POST';
const CREATE_POST_SUCCESS = 'blogposts/CREATE_POST_SUCCESS';
const CREATE_POST_FAILURE = 'blogposts/CREATE_POST_FAILURE';

const READ_POST = 'blogposts/READ_POST';
const READ_POST_SUCCESS = 'blogposts/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'blogposts/READ_POST_FAILURE';

const UPDATE_POST = 'blogposts/UPDATE_POST';
const UPDATE_POST_SUCCESS = 'blogposts/UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'blogposts/UPDATE_POST_FAILURE';

const REMOVE_POST = 'blogposts/REMOVE_POST';
const REMOVE_POST_SUCCESS = 'blogposts/REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'blogposts/REMOVE_POST_FAILURE';

export const SET_DRAFT = 'draft/SET_DRAFT';
export const UPDATE_DRAFT = 'draft/UPDATE_DRAFT';

const initialState = [];

function indexOfObjectById(arr, obj) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i].id === obj.id) return i;
  }
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_POSTS_SUCCESS:
    return [...payload];

  case CREATE_POST_SUCCESS:
    return [{
      id: (state.length === 0)
          ? 1
          : Math.max.apply(state.map(post => post.id)) + 1,
      title: payload.title,
      subtitle: payload.subtitle,
      poster: payload.poster,
      body: payload.body,
      user: payload.user
    }, ...state];

  case UPDATE_POST_SUCCESS:
    const index = indexOfObjectById(state, payload);
    const oldPost = state[index];
    const newState = [...state];
    newState.splice(index, 1, {...oldPost, ...payload});

    return newState;

  case REMOVE_POST_SUCCESS:
    return state.filter(blogpost =>
        blogpost.id !== payload.id
    );

  default:
    return state;
  }
}


export function fetchPosts(start = 0, limit = 10) {
  return async (dispatch) => {
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
      type: SET_DRAFT,
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
    type: UPDATE_DRAFT,
    payload: draft
  };
}
