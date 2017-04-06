const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="name" />
        <input type="password" name="password" />
        <button type="submit" value="Submit">Submit</button>
      </form>
    )
  }
}

module.exports = RegistrationForm