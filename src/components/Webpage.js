import React from 'react';
import FillerText from './FillerText';


class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>
          <h1>The world's coolest webpage</h1>
        </title>
        <div>
          < FillerText />
          < FillerText />
        </div>
      </div>
    );
  }
}

export default Webpage;