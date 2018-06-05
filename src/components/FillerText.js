// In the components/FillerText.js file, create a React component called FillerText.
// This component should be a paragraph containing the following text: I am a filler text. I can be used to fill your screen. Amazing!

import React from 'react'
import ReactDOM from 'react-dom'

class FillerText extends React.Component {
    render(){
        return(
            <div className="fillerText">
            <p>I am a filler text.  I can be used to fill your screen. Amazing!</p>
            </div>
        )
    }
}

export default FillerText;