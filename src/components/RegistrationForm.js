import React from 'react';

//class RegistrationForm extends React.Component {
//  render() {
//    return (
//      <div className="registrationForm">
//        <form>
//          <input type="text" name="first"></input>
//          <input type="password" name="password"></input>
//          <input type="submit" value="Submit"></input>
//        </form>>
//      </div>
//    )
//  }
//}


class RegistrationForm extends React.Component {
  render () {
    return (
      <form>
        <input type="text" name="first"></input>
        <input type="password" name="Password"></input>
        <button type="submit" value="Submit"></button>
      </form>
    )
  }
}

export default RegistrationForm;