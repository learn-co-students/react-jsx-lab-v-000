import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <input type="text">Name</input>
          <input type="password">Pasword</input>
          <button type="submit"></button>
        </form>
    );
  }
}

export default RegistrationForm;
