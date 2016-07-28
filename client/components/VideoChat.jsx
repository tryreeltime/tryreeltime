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

        window.mediaRecorder = new MediaRecorder(localStream /*, options*/);
        var recordedChunks = [];
        var handleDataAvailable = (event) => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          } else {
            console.log('no stream? error in handleDataAvailable');
          }
        };
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = () => {
          console.log('stop fired');

          var file = new File(recordedChunks, `userid.webm`, {
            type: 'video/webm'
          });

          console.log('file', file);
          this.props.socket.emit('videoFile', file);

          var reader = new FileReader();

          reader.onload = function( e ) {
          // console.log('currentTarget.result :', e.currentTarget.result);
            // this.props.socket.emit('videoFile', e.currentTarget.result);
          }.bind( this );
          reader.readAsText( file );

  //         // this.props.socket.emit('videoFile', blob);

            //var blob = new Blob(recordedChunks, {
            //   type: 'video/webm'
            // });
            // var url = URL.createObjectURL(blob);
            // // var a = document.createElement('a');
            // // document.body.appendChild(a);
            // // a.style = 'display: none';
            // // a.href = url;
            // // a.download = 'test.webm';
            // // a.click();
            //   // this.props.socket.emit('videoFile', a);
            //   this.props.socket.emit('videoFile', url);
            // window.URL.revokeObjectURL(url);

        };

        mediaRecorder.start();

        window.setTimeout( () => {
          mediaRecorder.stop(); // TODO: move this event elsewhere ?
        }, 5000)
        return localStream;
      })
      .then(function(whatisEVENHERE){
        console.log('nutherCheck', whatisEVENHERE);
        return whatisEVENHERE;
      })
      .then(this.setUpVideoStream)
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
