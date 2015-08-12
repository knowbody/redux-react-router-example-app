const initialState = {
  user: {
    id: 1,
    username: "johndoe",
    email: "john.doe@gmail.com",
    password: "demo",
    avatar: "https://randomuser.me/api/portraits/med/women/1.jpg",
    firstname: "John",
    lastname: "Doe"
  }
};

export default function user(state = initialState, action = {}) {
  const { type } = action;

  switch (type) {
  default:
    return state;
  }
}
