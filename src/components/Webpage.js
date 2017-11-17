import React from 'react'
const FillerText = require('./FillerText');

class Webpage extends React.Component {
	render() {
		return (
			<div>
				<title>The world's coolest webpage</title>
				<FillerText />
				<FillerText />
			</div>
		)
	}
}

export default Webpage