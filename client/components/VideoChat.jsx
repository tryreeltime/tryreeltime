import React from 'react';

import { getPeer, establishPeerCall } from '../lib/webrtc';

class VideoChat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localStream: null,
    };

    this.setUpVideoStream = this.setUpVideoStream.bind(this);
    getPeer().on('call', (call) => {
      call.answer(this.state.localStream);
      console.log('New RTC call works - acting as source');
      this.handleNewCall(call);
    });

  }

  componentDidMount() {
    const constraints = {
      audio: true,
      video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then(this.setUpVideoStream)
      .catch(console.error.bind(console));
  }

  setUpVideoStream(localStream) {
    const localVideo = document.querySelector('.local-video');
    localVideo.srcObject = localStream;
    this.setState({localStream: localStream});

    // this.establishNewCall(this.state.localStream, this.props.isSource ? null : this.props.peerId);
    if (!this.props.isSource) {
      this.makeNewCall(this.state.localStream, this.props.peerId);
    }
  }

  handleNewCall(call) {
    call.on('stream', (remoteStream) => {
      var newRemoteVid = document.createElement('video');
      newRemoteVid.setAttribute('class', 'remote-video');
      newRemoteVid.setAttribute('autoPlay', 'true');
      document.querySelector('#v-chat').appendChild(newRemoteVid);
      newRemoteVid.srcObject = remoteStream;
    });
  }

  makeNewCall(mediaStream, sourceId) {
    const newCall = getPeer().call(sourceId, mediaStream);
    console.log('New call established - acting as receiver');
    this.handleNewCall(newCall);
  }

  establishNewCall(mediaStream, sourceId) {
    establishPeerCall(mediaStream, sourceId)
      .then((remoteStream) => {
        // const remoteVideo = document.querySelector('.remote-video');
        var newRemoteVid = document.createElement('video');
        newRemoteVid.setAttribute('class', 'remote-video');
        newRemoteVid.setAttribute('autoPlay', 'true');
        document.querySelector('#v-chat').appendChild(newRemoteVid);
        newRemoteVid.srcObject = remoteStream;
      })
      .catch(console.error.bind(console));
  }

  render() {
    return (
      <div id="v-chat">
        <video className="local-video" autoPlay></video>
      </div>
    );
  }
}

VideoChat.propTypes = {
  isSource: React.PropTypes.bool.isRequired,
  peerId: React.PropTypes.string,
};

export default VideoChat;
