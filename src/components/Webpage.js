import React from 'react';
import FillerText from './FillerText';

export default class Webpage extends React.Component{
    render() {
        return <div>
            <p>The world's coolest webpage</p>
            <FillerText />
            <FillerText />
        </div>
    }
}