import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
