import React from 'react';

export default class RegistrationForm extends React.Component {
  render() {
    return(
      <form action="post">
        <input type="text"/>
        <input type="password"/>
        <button type="submit">submit</button>
      </form>
    )  
  }
}
