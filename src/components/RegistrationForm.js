import React from 'react'

class RegistrationForm extends React.Component {
  render () {
    return (
      <form method="POST" action="/food">
        <input type="text" name="name" />
        <input type="password" name="password"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default RegistrationForm;
