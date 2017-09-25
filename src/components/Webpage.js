import React from 'react';
import {FillerText} from './FillerText';

class Webpage extends React.component {
  render () {
    return (
      <div>
        <title>"The world's coolest webpage."</title>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
