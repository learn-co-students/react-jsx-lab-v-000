import React from 'react';

class RegistrationForm extends React.Component {
    render() {
        return (
            <form>
                Name: <input type="text"></input>
                Password: <input type="password"></input>
                <button type="submit"></button>
            </form>
        )
    }
}

export default RegistrationForm;