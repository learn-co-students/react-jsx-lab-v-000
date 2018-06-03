import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <p>Name: <input type="text" /></p>
        <p>Password: <input type="password" /></p>
        <p><button type="submit" name="Submit" /></p>
      </form>
    );
  }
}
 
export default RegistrationForm;