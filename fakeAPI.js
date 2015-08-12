var jsonServer = require('json-server');
var data = require('./test/fixture/data');

var server = jsonServer.create();
var router = jsonServer.router(data);

server.use(jsonServer.defaults);
server.use(router);

server.listen(3010, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }

  console.log('Fake API listening at localhost:3010');
});