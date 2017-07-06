import React from 'react';
import FillerText from './FillerText'


class Webpage extends React.Component {
  render (){
    return (
      React.createElement('title', {}, 'The world\'s coolest webpage'),
      React.createElement(FillerText),
      React.createElement(FillerText)
    )
  }
}

export default Webpage