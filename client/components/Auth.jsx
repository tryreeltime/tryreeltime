import React from 'react';
import startup from './../lib/captureStills.js';
// className = "auth"

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textinput: '',
      username: '',
      showCamera: false
    }
  }

  // generic handleinput.
  handleInput(e) {
    this.setState({textinput: e.target.value});
  }

  // set username state for use in auth
  handleSubmit() {
    this.setState({username: this.state.textinput});
    this.setState({showCamera: true});
    startup(this.state.username); // passing down to doAuth in /captureStills
  }

  // TODO: style button
  // TODO: style form

  render() {
    return(
      <div>
        <input className="authText" type='text' value={this.state.textinput}
              onChange={this.handleInput.bind(this)}></input>
        <button className="authText" onClick={this.handleSubmit.bind(this)}>Authenticate</button>
      </div>
    )
  }
}

export default Auth
