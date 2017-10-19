import React from 'react';
// import ReactDOM from 'react-dom';

class RegistrationForm extends React.Component{
  render(){
    return(

        <form>
          Text:<input type="text" /><br/>
          PW:  <input type="password" /><br/>
          <br/>
          <button type="submit">Click </button>
        </form>
      
    );
  }
}

export default RegistrationForm;
