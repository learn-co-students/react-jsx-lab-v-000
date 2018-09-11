import React, {Component} from 'react';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render () {
    return (
      <div id="main">
        <div id="title">The world&#39;s coolest webpage</div>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
