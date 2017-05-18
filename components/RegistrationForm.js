import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
            <input type="text" />
        </label>
        <label>
          Password:
            <input type="password" />
        </label>
        <button type="submit" value="submit" />
      </form> 
    )
  }
}

export default RegistrationForm
