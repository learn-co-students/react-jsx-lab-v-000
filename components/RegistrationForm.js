const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

module.exports = RegistrationForm;