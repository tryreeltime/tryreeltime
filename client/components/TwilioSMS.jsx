import React from 'react';

class TwilioSMS extends React.Component {
  constructor(props) { // link = http://localhost:3000/?id={props.myId}
    super(props)
    this.state = {
      numberInput: ''
    }
  }

  createMessage(number) { // TODO: validation
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
      /*
      .then( (res) => { // 500 internal error.
        console.log(res);
        return res.json()
      })
      */

    }).then( (data) => {
      console.log('twilio success', data);
    }).catch( (err) => {
      console.error('twilio error', err);
    });
  }

  handleSubmit() {
    this.createMessage(this.state.numberInput);
  }

  handleChange(e) {
    this.setState({numberInput: e.target.value});
  }

  render() {
    return(
      <div>
        <input className="authText" type="text"
               onChange={this.handleChange.bind(this)}
               value={this.state.numberInput}></input>
        <button className="authText"
                onClick={this.handleSubmit.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default TwilioSMS
