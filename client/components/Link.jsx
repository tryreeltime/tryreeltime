import React from 'react';
import TwilioSMS from 'TwilioSMS.jsx';
import CopyToClipboard from 'react-copy-to-clipboard';

const Link = (props) => (
  <div id="link">
    <div id="link-message">
      Send your friend the following link:<br />
      <span id="link-url">http://localhost:3000/?id={props.myId}</span>
      <CopyToClipboard text={`http://localhost:3000/?id=${props.myId}`}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <p>Share Via SMS:</p>
      <TwilioSMS link={`http://localhost:3000/?id=${props.myId}`}/>
    </div>
  </div>
);

Link.propTypes = {
  myId: React.PropTypes.string,
};

export default Link;
