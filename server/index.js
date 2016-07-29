// Requires
const express = require('express');
const socket = require('socket.io');
const http = require('http');
const s3 = require('./s3.js');
const bodyParser = require('body-parser')

// Init
const app = express();
const server = http.createServer(app);
const io = socket.listen(server);

// Config
const EXPRESS_PORT = 3000;

// Twilio
const twilioCredentials = require('./twilioCredentials.js');
const client = require('twilio')(twilioCredentials.accountSid, twilioCredentials.authToken);

// Routes
app.use(express.static(`${__dirname}/../client`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/message', (req, res) => {
  console.log('post to message, on server', ' || number: ', req.body.number, '|| message: ', req.body.message);
  createMessage(req.body.number, req.body.message);
  res.status(201).send();
});

// Twilio Functions
function createMessage(number, message) {
  client.messages.create({
      to: number,
      from: "+16572140538",
      body: message
  }, function(err, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!err) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:', message.sid);
        console.log('Message sent on:', message.dateCreated);
    } else {
        console.log('Error in Twilio SMS send', err);
    }
  });
}

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

///
  socket.on('videoFile', (theVideo) => {
    console.log('what makes it into vidSocket',theVideo);
    console.log('Video File received via socket');
    var result = s3.postTheVideo(theVideo);
    console.log('is there a result obj?', result);
    console.log(result.url);
    //how do i send back data??
  });

    socket.on('photoFile', (thePhoto) => {
    console.log('what makes it into vidSocket',thePhoto);
    console.log('Photo File received via socket');
    var result = s3.postTheVideo(thePhoto);
    console.log('is there a result obj?', result);
    console.log(result.url);
    //how do i send back data??
  });
});


server.listen(process.env.PORT || EXPRESS_PORT);
console.log(`Listening on port ${EXPRESS_PORT}`);
