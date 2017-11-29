import FillerText from './FillerText';
import React from 'react';

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>"The world's coolest webpage"</title>
        React.createElement(FillerText) VS <FillerText /> ???
        React.createElement(FillerText)
      </div>
    )
  }
}

export default Webpage;
