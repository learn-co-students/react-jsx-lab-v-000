import React from 'react';
import FillerText from './components/FillerText';

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <title>"The world's coolest webpage"</title>
        React.createElement(FillerText)
        React.createElement(FillerText)
      </div>
    )
  }
}

export default Webpage;
