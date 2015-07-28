import { ADD_POST, REMOVE_POST } from '../constants/ActionTypes';

const initialState = [{
  id: 2,
  title: 'Blogs are awesome',
  intro: 'Intro to my blog',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
}, {
  id: 1,
  title: 'React Router is cool',
  intro: 'Another intro',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
}, {
  id: 0,
  title: 'Use Redux',
  intro: 'Intro to Redux',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',

}];

export default function blogposts(state = initialState, action) {
  switch (action.type) {
  case ADD_POST:
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      title: action.title,
      intro: action.intro,
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
