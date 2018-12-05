
import React, { Component } from 'react'; // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom'; // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';
import FillerText from './components/FillerText';

export default class App extends Component {
	render () {
		return (
			<div>
      			<RegistrationForm />
      			<Webpage />
    		</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('global'))
