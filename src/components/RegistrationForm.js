import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" /><br />
        <input type="password" /><br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default RegistrationForm;
