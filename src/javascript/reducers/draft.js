import * as types from '../constants/ActionTypes';

const initialState = {
  title: '',
  subtitle: '',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: ''
};

export default function draft(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case types.CREATE_POST_SUCCESS:
    return {
      ...initialState,
      poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
    };

  case types.UPDATE_POST_SUCCESS:
    return {
      ...initialState,
      poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
    };

  case types.SET_DRAFT:
    return {...payload};

  case types.UPDATE_DRAFT:
    return {...state, ...payload};

  default:
    return state;
  }
}
