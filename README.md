# ReelTime Documentation

[![Build Status](https://travis-ci.org/cpruijsen/tryreeltime.svg?branch=master)](https://travis-ci.org/cpruijsen/tryreeltime)

## Run this app

To run this app first `npm install` inside the root directory.
Then run `webpack --watch` and `npm start` in that order.

Previous docs: https://docs.google.com/document/d/1K59qsbn6l3HnMAh7S6xlKq4TSJGD33LMSjvUJNIxONk/edit

## Technologies Used

### Kairos API for Facial Recognition and Video Emotion Analysis
- https://www.kairos.com/docs/

### FileSystem && new File():
- https://developer.mozilla.org/en-US/docs/Web/API/FileReader
-

### WebRTC:
- PeerJS:
-
- to record a stream: https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
-

### MediaRecorder - for saving the camera to a WebM file
-
-

### Sending WebM to AWS S3
-
-

### Capturing Still images
- https://github.com/mdn/samples-server/blob/master/s/webrtc-capturestill/
- https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Taking_still_photos

### Twilio SMS to send the link to friends
- https://www.twilio.com/blog/2013/03/introducing-the-twilio-module-for-node-js.html
- http://twilio.github.io/twilio-node/

### React Copy to clipboard
- https://www.npmjs.com/package/react-copy-to-clipboard

### Giphy API
- https://github.com/Giphy/GiphyAPI#translate-endpoint
- emojify https://github.com/banyan/react-emoji

### Travis CI

We run Travis CI using the latest available Node version (6.2.2 at time of writing). Currently this only lints with JS Hint: http://jshint.com/docs/

- helpful tutorial: https://github.com/dwyl/learn-travis
- Travis: https://travis-ci.org

## Attempted, Deferred:

We attempted work on MP4Box...

### FMP4 explained:
- short: http://stackoverflow.com/questions/35177797/what-exactly-is-fragmented-mp4fmp4-how-is-it-different-from-normal-mp4
- longer: https://developer.mozilla.org/en-US/Apps/Fundamentals/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources

### Node module for MP4 => FFMPEG
https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
Check for audio vs video MP4
https://github.com/ListenerApproved/node-ffprobe
