import React from 'react';

import { establishPeerCall } from '../lib/webrtc';

class VideoChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localStream: null,
    };

    this.setUpVideoStream = this.setUpVideoStream.bind(this);
  }

  componentDidMount() {
    const constraints = {
      audio: false, // we don't need audio for our purposes.
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then( (localStream) => {

        console.log('stream after getUserMedia', localStream);

        window.mediaRecorder = new MediaRecorder(localStream);
        var recordedChunks = [];
        var handleDataAvailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
            downloadRecording();
          } else {
            console.log('no stream? error in handleDataAvailable');
          }
        }
        var downloadRecording = () => {
          var blob = new Blob(recordedChunks, {
            type: 'video/webm'
          });
          var url = URL.createObjectURL(blob);

          // TODO: add fetch() POST here.
          // TODO: remove the auto local fileDownload.

          var a = document.createElement('a');
          document.body.appendChild(a);
          a.style = 'display: none';
          a.href = url;
          a.download = 'test.webm';
          a.click();

          // TODO: move revokeObjectURL to .then() on fetch().

          window.URL.revokeObjectURL(url);
        }

        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.start();

        window.setTimeout( () => {
          console.log('reg setTimeout function invocation');
          mediaRecorder.stop(); // TODO: extract the stop() to the moment we actually want to stop the recording.
        }, 5000);

      }).then(this.setUpVideoStream)
        .catch(console.error.bind(console));
  }

  setUpVideoStream(localStream) {
    const localVideo = document.querySelector('.local-video');
    localVideo.srcObject = localStream;

    establishPeerCall(localStream, this.props.isSource ? null : this.props.peerId)
      .then((remoteStream) => {
        const remoteVideo = document.querySelector('.remote-video');
        remoteVideo.srcObject = remoteStream;
      })
      .catch(console.error.bind(console));
  }

  render() {
    return (
      <div>
        <video className="local-video" autoPlay></video>
        <video className="remote-video" autoPlay></video>
      </div>
    );
  }
}

VideoChat.propTypes = {
  isSource: React.PropTypes.bool.isRequired,
  peerId: React.PropTypes.string,
};

export default VideoChat;
