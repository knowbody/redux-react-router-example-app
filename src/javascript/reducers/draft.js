import * as types from '../constants/ActionTypes'

const initialState = {
  title: '',
  subtitle: '',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: ''
};

export default function draft(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case types.ADD_POST:
      return {
        ...initialState,
        poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
      };

    case types.EDIT_POST:
      return {...payload};

    case types.UPDATE_DRAFT:
      return {...state, ...payload};

    default:
      return state
  }
}