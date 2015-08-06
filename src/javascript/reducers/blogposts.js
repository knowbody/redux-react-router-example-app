import { ADD_POST, REMOVE_POST } from '../actions/ActionTypes'

const initialState = [{
  id: 0,
  title: 'Blogs are awesome',
  subtitle: 'Intro to my blog',
  avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`,
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
}, {
  id: 1,
  title: 'React Router is cool',
  subtitle: 'Another intro',
  avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
}, {
  id: 2,
  title: 'Use Redux',
  subtitle: 'Intro to Redux',
  avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`,
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'

}];

export default function blogposts(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_POST:
      return [{
        id: (state.length === 0) ? 0 : state[0].id + 1,
        title: action.title,
        subtitle: action.subtitle,
        poster: action.poster,
        avatar: action.avatar,
        body: action.body
      }, ...state];

    case REMOVE_POST:
      return state.filter(blogpost =>
          blogpost.id !== action.id
      );

    default:
      return state
  }
}
