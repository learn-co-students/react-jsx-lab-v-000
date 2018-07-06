import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export class RegistrationForm extends React.Component {
render() {
  return (
    <form>
      <input type="text">Username: </input>
      <input type="password"> Password: </input>
      <button type="submit">Submit</button>


      </form>


  )
}

}

export default RegistrationForm;