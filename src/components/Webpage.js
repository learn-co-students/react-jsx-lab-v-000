import React, { Component } from 'react'; // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom'; // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
import FillerText from './FillerText';

export default class Webpage extends Component {
	render() {
		return (
			<div>
				<h1>The world&#x27;s coolest webpage</h1>
				<FillerText />
				<FillerText />
			</div>
		)
	}	
}
