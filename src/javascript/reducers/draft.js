import { ADD_POST, UPDATE_DRAFT } from '../actions/ActionTypes'

const initialState = {
  title: '',
  subtitle: '',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: ''
};

export default function draft(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {

    case ADD_POST:
      return {
        ...initialState,
        poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
      };

    case UPDATE_DRAFT:
      return {...state, ...payload};

    default:
      return state
  }
}