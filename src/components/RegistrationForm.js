import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
    <form>
      Name:
      <input type="text" name="name" />
      Password:
      <input type="password" name="password" />
      <button type="submit" value="Submit">Submit</button>
    </form>
    );
  }
}

export default RegistrationForm;