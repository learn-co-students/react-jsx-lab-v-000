import React from 'react';

class RegistrationForm extends React.Component{
  render() {
    return (
      <form id="regForm">
      Name: <input type="text"/>
      Password: <input type="password"/>
      <button type="submit" htmlFor="reg">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
