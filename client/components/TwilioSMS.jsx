import React from 'react';

class TwilioSMS extends React.Component {
  constructor(props) { // link = http://localhost:3000/?id={props.myId}
    super(props)
    this.state = {
      numberInput: '',
      showError: false,
      showDone: false
    }
  }

  postMessage(number) {
    var that = this;
    number = '+1' + number;
    let body = {
        number: number,
        message: this.props.link
    };
    fetch('/message', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( (res) => {
      return res.json()
    }).then( (data) => {
      console.log('twilio success', data);
      this.setState({showDone: true});
    }).catch( (err) => {
      // if(err.code === 400)
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
        {this.state.showError ? <div className="authText">Invalid Number</div> : null}
        {this.state.showDone ? <div className="authText">SMS Sent!</div> : null}
      </div>
    )
  }
}

export default TwilioSMS