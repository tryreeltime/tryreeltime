const calculateEmotions = data => {
	let framecount = data.frames.length;
	let aggregateEmotions = data.frames.map( (frame) => {
		return frame.person.emotions;
	})
	.reduce( (a, b) => {
		return {
			attention: a.attention + b.attention,
			negative: a.negative + b.negative,
			smile: a.smile + b.smile,
			surprise: a.surprise + b.surprise
		}
	});
	let emotions = {
		0: {emotion: 'attention', val: aggregateEmotions.attention / framecount},
		1: {emotion: 'negative', val: aggregateEmotions.negative / framecount},
		2: {emotion: 'smile', val: aggregateEmotions.smile / framecount},
		3: {emotion: 'surprise', val: aggregateEmotions.surprise / framecount}
	};
	return emotions;
};

export default calculateEmotions;