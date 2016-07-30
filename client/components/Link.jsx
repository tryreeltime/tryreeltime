import React from 'react';
import TwilioSMS from 'TwilioSMS.jsx';
import CopyToClipboard from 'react-copy-to-clipboard';

const Link = (props) => (
  <div id="link">
    <div id="link-message">
      Send your friend the following link:<br />
      <span id="link-url">https://salty-sands-27362.herokuapp.com/?id={props.myId} </span>
      <CopyToClipboard text={`https://salty-sands-27362.herokuapp.com/?id=${props.myId}`}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <p>Share Via SMS:</p>
      <TwilioSMS link={`http://salty-sands-27362.herokuapp.com/?id=${props.myId}`}/>
    </div>
  </div>
);

Link.propTypes = {
  myId: React.PropTypes.string,
};

export default Link;
