// In the components/Webpage.js file, create an ES2015 React component called Webpage.
// This component should contain a title with the text The world's coolest webpage.
// This component should also contain two instances of the FillerText component.

const React = require('react');

class FillerText extends React.Component {
	render() {
		return (
			<p> 
				I am a filler text. I can be used to fill your screen. Amazing!
			</p>
		);
	}
}

module.exports = FillerText;