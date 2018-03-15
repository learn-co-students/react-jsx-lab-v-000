import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
    <form>
      <label>
        Name:
        <input type="text" name="name" />
        <input type="password" name="password" />
      </label>
      <button type="submit" value="Submit">Submit</button>
    </form>
    );
  }
}

export default RegistrationForm;