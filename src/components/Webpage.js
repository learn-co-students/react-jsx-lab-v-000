import React from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <title>
        The world's coolest webpage
        <FillerText/>
        <FillerText/>
      </title>
    );
  }
}

export default Webpage
