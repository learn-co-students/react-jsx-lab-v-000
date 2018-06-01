import React from 'react';
import FillerText from './FillerText';

export default class RegistrationForm extends React.Component {
  render(){
    return (
      <form>
        <input type="text"/>
        <input type="password"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
