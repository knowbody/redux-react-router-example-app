import * as types from './ActionTypes'

export function login(username, password) {
  return {
    type: types.LOGIN,
    username,
    password
  }
}

export function register(username, email, password) {
  return {
    type: types.REGISTER,
    username,
    email
  }
}