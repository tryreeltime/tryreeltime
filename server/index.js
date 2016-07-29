// Requires
const express = require('express');
const socket = require('socket.io');
const http = require('http');

// Init
const app = express();
const server = http.createServer(app);
const ExpressPeerServer = require('peer').ExpressPeerServer;
const io = socket.listen(server);

// Config
const EXPRESS_PORT = 3000;

// Routes
app.use(express.static(`${__dirname}/../client`));

app.use('/peerjs', ExpressPeerServer(server, { debug: true, port: 9000, path: '/peerjs'}));

// Socket.io
io.on('connection', (socket) => {
  console.log('A user connected with socket id', socket.id);

  socket.on('disconnect', () => {
    console.log('A user disconnected with socket id', socket.id);
  });

  socket.on('room', function(room) {
    socket.join(room);
  });

  // Chat messaging events
  socket.on('chat message', (msg, roomId) => {
    console.log('MSG: ', msg);
    console.log('RoomID: ', roomId);

    socket.to(roomId).broadcast.emit('chat message', msg);
    // socket.broadcast.emit('chat message', msg);
  });

  // Video sync events
  socket.on('play', (time) => {
    console.log('Play command recieved');
    socket.broadcast.emit('play', time);
  });

  socket.on('pause', (time) => {
    console.log('Pause command recieved');
    socket.broadcast.emit('pause', time);
  });

  socket.on('newCall', (peerid) => {
    console.log('New call detected');
    socket.broadcast.emit('newCall', peerid);
  });
});


server.on('connection', function(id) {
  /* ........... */
  console.log('id is: ', id)
})

server.listen(process.env.PORT || EXPRESS_PORT);
console.log(`Listening on port ${process.env.PORT || EXPRESS_PORT}`);
