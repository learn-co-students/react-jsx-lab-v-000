import React, { Component } from 'react' // We need to import react so we can make use of its .component class

class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <input type="password" />
        <button type="submit" />
      </form>
    );
  }
}

export default RegistrationForm
