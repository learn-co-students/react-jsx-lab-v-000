import React from 'react';

export class RegistrationForm extends React.Component {
  render() {
    return (
      <form className="RegistrationForm">
        Username:<br/>
        <input type="text" name="username"/>
        <br/>
        Password:<br/>
        <input type="password" name="password"/>
        <br/>
        <button type="submit"/>

      </form>
    );
  }
}


export default RegistrationForm;
