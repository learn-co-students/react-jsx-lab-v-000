// One <form> element
// Two <input> elements — one has a text type, the other one is a password
// One <button> element with the submit type
import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
