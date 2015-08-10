const initialState = {
  id: 1,
  username: 'Law',
  avatar: `http://thecatapi.com/api/images/get?type=gif&r='${Math.random()}`
};

export default function user(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
  default:
    return state;
  }
}
