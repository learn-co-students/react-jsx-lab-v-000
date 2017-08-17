import React from 'react';
import FillerText from './FillerText';

export class WebPage extends React.Component {
  render() {
    return React.createElement('div', {},
      React.createElement('title', {}, "The world's coolest webpage"),
      React.createElement(FillerText),
      React.createElement(FillerText)
    );
  }
}

export default WebPage;
