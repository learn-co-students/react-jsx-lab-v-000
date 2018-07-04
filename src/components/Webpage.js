import React from 'react';
import FillerText from './FillerText'

export class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>The world's coolest webpage.</title>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

export default Webpage;
