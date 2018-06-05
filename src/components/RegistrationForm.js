import React from 'react'
import ReactDOM from 'react-dom'

class RegistrationForm extends React.Component {
    render(){
        return(
            <div className="registrationForm">
                <form>
                    <input type="text"/>
                    <input type="password"/>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;