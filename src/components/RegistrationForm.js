// Make sure to import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
	render() {
		return (
		<form>
			<input type="text"></input>
			<input type="password"></input>
			<button type="submit"></button>
		</form>
		);
	}
}

export default RegistrationForm;