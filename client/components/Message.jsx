import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = (props) => (
  <li className={props.message.className}>{ReactEmoji.emojify(props.message.text)}</li>
);

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
};

export default Message;
