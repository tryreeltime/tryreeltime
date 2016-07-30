import React from 'react';
import _ from 'underscore';

//NEED TO HAND DOWN THE SOCKET!! 
class EmotionsDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">Emotional Analysis</a>
			    </div>
			    <div>
			  	    <ul>
			  		    {_.map(this.props.emotions, (emotion, i) => {
			  		    	return <li key={i}> {emotion.emotion}: {emotion.val} </li>
			  		    })}
			  	    </ul>
			    </div>
			  </div>
			</nav>
		)
	}
}

export default EmotionsDisplay;


{/*
//TODO: add button to 'videoBomb your peer'
			  <div onClick={(e)=>{
			  	  console.log('Button clicked');
			  	  this.props.socket.emit('buttonClick', e);
			  }}>
				  <button>R they really enjoying this tho?</button>
			  </div>
*/}