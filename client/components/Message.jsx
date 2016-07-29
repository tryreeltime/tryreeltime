import React from 'react';
import ReactEmoji from 'react-emoji';

// NOTE: dc6zaTOxFJmzC is the Giphy public beta key, not for distribution

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
  }

  handleChatBody(text) {
    var that = this;
    if (text.slice(0, 6) !== '/giphy') {
      text = ReactEmoji.emojify(text);
      that.setState({message: text});
    } else {
      text = text.slice(6).split(' ').join('%20'); // replace spaces by %20 (http encoding) and slice off the `/giphy` part.
      let url = `http://api.giphy.com/v1/gifs/translate?s=${text}&api_key=dc6zaTOxFJmzC`;

      fetch(url).then( (res) => {
        return res.json();
      }).then( (result) => {
        console.log('success Giphy', result);
        that.setState({message: result.data.images.original.webp});
      }).catch( (err) => {
        console.error('error GET from Giphy', err);
      });
    }
  }

  componentWillMount() {
    this.handleChatBody(this.props.message.text);
  }

  render() {
    return (
      <li className={this.props.message.className}>{this.state.message}</li>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
};

export default Message;
