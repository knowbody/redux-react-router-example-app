import * as types from '../constants/ActionTypes';

const randGender = ['men', 'women'][Math.floor(Math.random() * 2)];
const baseUrl = 'https://randomuser.me/api/portraits/med/';

const initialState = [{
  id: 1,
  title: 'Blogs are awesome',
  subtitle: 'Intro to my blog',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  user: {
    id: 0,
    username: 'Murphy',
    avatar: `${baseUrl}${randGender}/${Math.floor(Math.random() * 100) + 1}.jpg`
  }
}, {
  id: 2,
  title: 'React Router is cool',
  subtitle: 'Another intro',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  user: {
    id: 1,
    username: 'Law',
    avatar: `${baseUrl}${randGender}/${Math.floor(Math.random() * 100) + 1}.jpg`
  }
}, {
  id: 3,
  title: 'Use Redux',
  subtitle: 'Intro to Redux',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: null,
  user: {
    id: 2,
    username: 'Joda',
    avatar: `${baseUrl}${randGender}/${Math.floor(Math.random() * 100) + 1}.jpg`
  }
}];

export default function blogposts(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_POST:
      return [{
        id: (state.length === 0) ? 1 : Math.max.apply(state.map(post => post.id)) + 1,
        title: payload.title,
        subtitle: payload.subtitle,
        poster: payload.poster,
        body: payload.body,
        user: payload.user
      }, ...state];

    case types.UPDATE_POST:
      let index = indexOfObjectById(state, payload);
      const oldPost = state[index];
      const newState = [...state];
      newState.splice(index, 1, {...oldPost, ...payload});

      return newState;

    case types.REMOVE_POST:
      return state.filter(blogpost =>
          blogpost.id !== payload.id
      );

    default:
      return state;
  }
}

function indexOfObjectById(arr, obj) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i].id === obj.id) return i;
  }
}