import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from "./RegistrationForm";
import FillerText from "./FillerText";

export default class Webpage extends React.Component {
    render(){
        return (
            <main>
                <h1>"The world's coolest webpage"</h1>
                <FillerText />
                <FillerText />
            </main>
        )
    }
}
