
import React from 'react';
import ReactDOM from 'react-dom';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="RegistrationForm">
        <input type="text" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
