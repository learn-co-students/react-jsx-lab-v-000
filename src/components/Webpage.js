import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
	render() {
		return (
			<div>
			  <title>"The world's coolest webpage"</title>
			  <div>
				  <FillerText />
				  <FillerText />
				</div>
			</div>
		);
	}
}

export default Webpage;