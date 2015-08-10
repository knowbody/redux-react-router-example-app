import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE } from '../constants/ActionTypes'

const initialState = {
  id: 1,
  username: 'Law',
  avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`
};

export default function user(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {

    default:
      return state
  }
}