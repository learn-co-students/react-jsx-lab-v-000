import React from 'react';

class RegistrationForm extends React.Component {
  render(){
    return(
      <form>
        <input type="text"/>
        <input type="password"/>
        <button type="submit">Click me</button>
      </form>
    )
  }
};

export default RegistrationForm
