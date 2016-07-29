// Requires
const express = require('express');
const socket = require('socket.io');
const http = require('http');

// Init
const app = express();
const server = http.createServer(app);
const ExpressPeerServer = require('peer').ExpressPeerServer;
const io = socket.listen(server);
const peerServer = ExpressPeerServer(server, { debug: true, port: 7105, path: '/peerjs'});

// Config
const EXPRESS_PORT = 3000;

// Routes
app.use(express.static(`${__dirname}/../client`));

// Peer server
app.use('/peerjs', peerServer);

app.get('/port', function(req, res) {
  res.json(process.env.PORT);
})


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


peerServer.on('connection', function(id) {
  /* ........... */
  console.log('id is: ', id)
  console.log('connection detected');
})

server.listen(process.env.PORT || EXPRESS_PORT);
console.log(`Listening on port ${process.env.PORT || EXPRESS_PORT}`);
