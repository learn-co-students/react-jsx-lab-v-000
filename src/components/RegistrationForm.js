import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <input type="text"></input>
      <p><input type="password"></input></p>
      <p><button type="submit">Submit</button></p>
      </form>
    );
  }
}

export default RegistrationForm;