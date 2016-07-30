import React from 'react';
import _ from 'underscore';

class EmotionsDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<nav class="navbar navbar-default">
			  <div class="container-fluid">
			    <div class="navbar-header">
			      <a class="navbar-brand" href="#">Emotional Analysis</a>
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