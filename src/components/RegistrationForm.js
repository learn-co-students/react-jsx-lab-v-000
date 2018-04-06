import React from 'react';

export class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" /><br/><br/>
        <input type="password" /><br/><br/>
        <button type="submit" />
      </form>
    )
  }
}

export default RegistrationForm;
