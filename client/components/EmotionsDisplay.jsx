import React from 'react';
import _ from 'underscore';

//NEED TO HAND DOWN THE SOCKET!!
class EmotionsDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	showEmoji(emotions) {
		let sortedEmotions = _.sortBy(emotions, 'val').reverse(); // returns sorted array of objects, val high > low.

		// CUSTOM EMOTION LOGIC GOES HERE.

		if (sortedEmotions[0].emotion === 'smile') {
			return <img className="emotionEmoji" src={'./../assets/happyEmotion.png'}/>
		} else if (sortedEmotions[0].emotion === 'surprise') {
			return <img className="emotionEmoji" src={'./../assets/shockEmotion.png'}/>
		} else if (sortedEmotions[0].emotion === 'negativity') {
			return <img className="emotionEmoji" src={'./../assets/angryEmotion.png'}/>
		} else if (sortedEmotions[0].emotion === 'attention') {
			return <img className="emotionEmoji" src={'./../assets/attentionEmotion.png'}/>
		} else {

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
							{this.showEmoji(this.props.emotions)}
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
