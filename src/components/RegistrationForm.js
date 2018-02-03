import React from 'react'; 

export default class RegistrationForm extends React.Component {
  render() {
    return (
        <form>
          <input type="text" name="user"/><br/>
          <input type="password" name="password"/><br />
          <button type="submit">Submit</button>
        </form>
    );
  }
}
