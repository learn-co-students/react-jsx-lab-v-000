import React, { Component } from 'react'; // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom'; // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

export default class RegistrationForm extends Component {	
	render() {	  	
	  	return (	
			<form>
			Name:
			  <input type="text" />
			Password:  
			  <input type="password" />
			Submit:  
			  <button type="submit" />
			</form>
	  	)	
	}
}
