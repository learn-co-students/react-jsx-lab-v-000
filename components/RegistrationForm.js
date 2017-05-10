import React from 'react';

export default class RegistrationForm extends React.Component {
    render() {
        return (
            <form>
                <label>Name: </label>
                <input type="text"/> <br></br>
                <label>Password: </label>
                <input type="password"/> <br></br>
                <button type="submit">Submit</button>
            </form>
        );
    }
}