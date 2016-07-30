import React from 'react';
import _ from 'underscore';

class EmotionsDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<div>
				<ul>
					{_.map(this.props.emotions, (emotion, i) => {
						return <li key={i}>`{emotion.emotion}: {emotion.val}`</li>
					})}
				</ul>
			</div>
		)
	}
}

export default EmotionsDisplay;