import React from 'react';

export default class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" value="name" />
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
