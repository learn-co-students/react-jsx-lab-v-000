import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="form">
        <input type="text" name="textField" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default RegistrationForm;
