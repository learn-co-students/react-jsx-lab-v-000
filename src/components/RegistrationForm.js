import React from 'react';

class RegistrationForm extends React.Component {
    render () {
        return (
            <form className="RegistrationForm">
                    <p><input type="text"/></p>
                    <p><input type="password"/></p>
                    <p><button type="submit">Submit</button></p>
           </form>
        )
    }
}

export default RegistrationForm;
