import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
    render () {
        return (
            <div className="Webpage">
              <p className="WebpageStuff">The world's coolest webpage</p>
            <FillerText />
            <FillerText />
            </div>
        )
    }
}

export default Webpage;
