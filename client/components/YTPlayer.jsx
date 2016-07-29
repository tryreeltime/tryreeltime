import React from 'react';

class YtPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null
    }
  }

  componentDidMount() {
    console.log('calling Component did mount in YTPlayer');
    this.search({query: 'legend of zelda ost', max: 25}, (vids) => {
      this.setState({videoList: vids.items.slice(1)});
      this.setState({currentVid: vids.items[0]});
      player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: vids.items[0].id.videoId,
        events: {
            'onReady': this.refs.vidPlayer.onPlayerReady,
            'onStateChange': this.refs.vidPlayer.onPlayerStateChange.bind(this)
        }
      });
    });
  }

  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <div id="player"></div>
        </div>
        <div className="video-player-details">
          <h3>{}</h3>
          <div>{}</div>
        </div>
      </div>
    );
  }
}

export default YtPlayer;
