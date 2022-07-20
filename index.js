// const express = require('express');
// const app = express();
// const server = require('http').createServer(app);
// const io = require('socket.io').Namespace.listen(server);
// const port = 3000;

// io.on('connection', socket => {
//   console.log('a user is connected :D');
// });

// server.listen([port, () => console.log('Server is connected on ' + port)]);
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const {Server} = require('socket.io');
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', socket => {
//   console.log('a user is connected :D');
// });

// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('Chat Message', msg => {
    console.log(msg);
    io.emit('Chat Message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
