import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form action="index.html" method="post">
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
