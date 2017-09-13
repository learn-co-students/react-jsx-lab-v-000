import React from 'react';

class RegistrationForm extends React.Component{
  render() {
    return (
      <form id="reg">
      <span>Name: </span>
      <input type="text"/>
      <span>Password: </span>
      <input type="password"/>
      <button type="submit" htmlFor="reg">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
