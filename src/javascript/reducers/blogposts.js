import { ADD_POST, REMOVE_POST } from '../actions/ActionTypes'

const initialState = [{
  id: 0,
  title: 'Blogs are awesome',
  subtitle: 'Intro to my blog',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  user: {
    id: 0,
    username: 'Murphy',
    avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`
  }
}, {
  id: 1,
  title: 'React Router is cool',
  subtitle: 'Another intro',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  user: {
    id: 1,
    username: 'Law',
    avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`
  }
}, {
  id: 2,
  title: 'Use Redux',
  subtitle: 'Intro to Redux',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: null,
  user: {
    id: 2,
    username: 'Joda',
    avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`
  }

}];

export default function blogposts(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        title: payload.title,
        subtitle: payload.subtitle,
        poster: payload.poster,
        avatar: payload.avatar,
        body: payload.body
      }, ...state];

    case REMOVE_POST:
      return state.filter(blogpost =>
          blogpost.id !== payload.id
      );

    default:
      return state
  }
}
