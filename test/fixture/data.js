var casual = require('casual');

var arrayOf = function(times, type) {
  var result = [];

  for (var i = 0; i < times; ++i) {
    result.push(casual[type]);
  }

  return result;
};

var data = {};

var randGender = ['men', 'women'][Math.floor(Math.random() * 2)];
var baseUrl = 'https://randomuser.me/api/portraits/med/';

var userId = 0;
casual.define('user', function() {
  ++userId;
  return {
    id: userId,
    username: casual.username,
    email: casual.email,
    password: 'demo',
    avatar: baseUrl + randGender + '/' + userId + '.jpg',
    firstname: casual.first_name,
    lastname: casual.last_name
  };
});

var postId = 0;
casual.define('post', function() {
  ++postId;
  return {
    id: postId,
    title: casual.title,
    subtitle: casual.title,
    poster: 'http://thecatapi.com/api/images/get?type=jpg&r=' + postId,
    body: casual.text,
    creator: Math.floor(Math.random() * 100)
  };
});

data.user = arrayOf(100, 'user');
data.post = arrayOf(1000, 'post');

module.exports = data;