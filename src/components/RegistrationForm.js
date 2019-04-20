import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

class RegistrationForm extends React.Component {

  render() {
      return(
          <form>
            <input type='text'></input>
            <input type='password'></input>
            <button type='submit'>Submit</button>
          </form>
      )
  }

}



export default RegistrationForm
