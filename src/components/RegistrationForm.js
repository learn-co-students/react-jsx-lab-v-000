import React, { Component } from 'react';

export default class RegistrationForm extends Component {
  render(){
    return(
      <form>
        Email: <input type="text" /><br /><br />
        Password: <input type="password" /><br /><br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
