import React from 'react';

class RegistrationForm extends React.Component {
    render() {
        return (
          <form >
            <input type = "text" name = "text" ></input>
            <input type = "password" name = "password"> </input>
            <button type = "submit" value = "Submit"> </button>
            </form>
        )
    }
}

export default RegistrationForm
