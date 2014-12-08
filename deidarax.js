var host = (process.env.NODE_ENV === 'production') ? '10.0.0.10' : 'localhost';

var socket = require('socket.io-client')('http://' + host + ':3000');

socket.on('connect', function(){
  console.log('connect');
});

socket.on('event', function(data){
  console.log('event', data);
});

socket.on('disconnect', function(){
  console.log('disconnect');
});

exports.add = function(x, y){
  return x + y;
}

