const randGender = ['men', 'women'][Math.floor(Math.random() * 2)];
const baseUrl = 'https://randomuser.me/api/portraits/med/';

const initialState = {
  id: 1,
  username: 'Law',
  avatar: `${baseUrl}${randGender}/${Math.floor(Math.random() * 100) + 1}.jpg`
};

export default function user(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
  default:
    return state;
  }
}
