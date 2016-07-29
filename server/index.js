// Requires
const express = require('express');
const socket = require('socket.io');
const http = require('http');
const s3 = require('./s3.js');

// Init
const app = express();
const server = http.createServer(app);
const io = socket.listen(server);

// Config
const EXPRESS_PORT = 3000;

// Routes
app.use(express.static(`${__dirname}/../client`));

// app.post('/videos', function (req, res){
// console.log('posted to videos')
// });

// app.post('/photos', function (req, res){

// });

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

// Video & Photo Harvesting events
  socket.on('videoFile', (theVideo) => {
    // console.log('Video File received via socket ');
    var urls =  s3.postTheVideo(theVideo);
    console.log(urls);
    socket.emit('videoUrl', urls);
  });

  //   socket.on('photoFile', (thePhoto) => {
  //   console.log('what makes it into vidSocket',thePhoto);
  //   console.log('Photo File received via socket');
  //   var result = s3.postTheVideo(thePhoto);
  // });
});


server.listen(process.env.PORT || EXPRESS_PORT);
console.log(`Listening on port ${EXPRESS_PORT}`);
