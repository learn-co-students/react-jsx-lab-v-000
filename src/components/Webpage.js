
// In the components/Webpage.js file, create a React component called Webpage.
// This component should contain a title with the text The world's coolest webpage.
// This component should also contain two instances of the FillerText component.

import FillerText from './FillerText';
import React from 'react'
import ReactDOM from 'react-dom'

class Webpage extends React.Component {
    render() {
        return (
            <div className="webpage">
            <title>The world's coolest webpage</title>
            <FillerText/>
            <FillerText/>
            </div>
        )
    }
}

export default Webpage;