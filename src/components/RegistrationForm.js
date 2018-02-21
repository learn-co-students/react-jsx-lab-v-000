import React from 'react';
import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="name" />
        <input type="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
 
export default RegistrationForm;
