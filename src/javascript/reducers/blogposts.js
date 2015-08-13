import * as types from '../constants/ActionTypes';

function indexOfObjectById(arr, obj) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i].id === obj.id) return i;
  }
}

export default function blogposts(state = [], action = {}) {
  const { type, payload } = action;

  switch (type) {
  case types.FETCH_POSTS_SUCCESS:
    return [...payload];

  case types.CREATE_POST_SUCCESS:
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

  case types.UPDATE_POST_SUCCESS:
    const index = indexOfObjectById(state, payload);
    const oldPost = state[index];
    const newState = [...state];
    newState.splice(index, 1, {...oldPost, ...payload});

    return newState;

  case types.REMOVE_POST_SUCCESS:
    return state.filter(blogpost =>
        blogpost.id !== payload.id
    );

  default:
    return state;
  }
}
