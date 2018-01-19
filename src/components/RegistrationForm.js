import React from 'react';

class RegistrationForm extends React.Component {
  render () {
    return (
      <form>
        Name: <input type="text" name="name"/><br/>
        Password: <input type="password" name="password"/><br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
