import React from 'react';

class TwilioSMS extends React.Component {
  constructor(props) { // link = http://localhost:3000/?id={props.myId}
    super(props)
    this.state = {
      numberInput: '',
      showDone: false
    }
  }

  postMessage(number) {
    var that = this;
    number = '+1' + number;
    let body = {
        number: number,
        message: this.props.myId
    };
    fetch('/message', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( () => {
      that.setState({showDone: true});
    }).catch( (err) => {
      console.error('twilio error', err);
    });
  }

  handleSubmit() {
    this.postMessage(this.state.numberInput);
  }

  handleChange(e) {
    this.setState({numberInput: e.target.value});
  }

  render() {
    return(
      <div className="authText">
        <input className="authText" type="text"
               onChange={this.handleChange.bind(this)}
               value={this.state.numberInput}></input>
        <button className="authText"
                onClick={this.handleSubmit.bind(this)}>Submit</button>
        {this.state.showDone ? <div className="authText">SMS Sent!</div> : null}
      </div>
    )
  }
}

export default TwilioSMS
