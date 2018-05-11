import React from 'react'

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="registrationForm">
        <form>
          <input type="text"></input>
          <input type="password"></input>
          <button type="submit"></button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
