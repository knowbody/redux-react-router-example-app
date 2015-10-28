const CREATE_POST_SUCCESS = 'draft/CREATE_POST_SUCCESS';
const UPDATE_POST_SUCCESS = 'draft/UPDATE_POST_SUCCESS';

export const SET_DRAFT = 'draft/SET_DRAFT';
export const UPDATE_DRAFT = 'draft/UPDATE_DRAFT';

const initialState = {
  title: '',
  subtitle: '',
  poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`,
  body: ''
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case CREATE_POST_SUCCESS:
    return {
      ...initialState,
      poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
    };

  case UPDATE_POST_SUCCESS:
    return {
      ...initialState,
      poster: `http://thecatapi.com/api/images/get?type=jpg&r='${Math.random()}`
    };

  case SET_DRAFT:
    return { ...payload };

  case UPDATE_DRAFT:
    return { ...state, ...payload };

  default:
    return state;
  }
}
