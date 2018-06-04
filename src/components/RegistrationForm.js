import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form action="/action_page.php">
        Username:<br/>
        <input type="text"/>

        Password:<br/>
        <input type="password"/>
        <br/><br/>
        <button type="submit" value="Submit"/>
      </form>
    )
  }
}

export default RegistrationForm
