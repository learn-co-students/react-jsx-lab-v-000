import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';



export default class Webpage extends React.Component {
  render() {
    const title = 'The world\'s coolest webpage'
    return (
      <div>
        <head>
          <title>
            {title}
          </title>
        </head>
        <FillerText/>
        <FillerText/>
      </div>
    )
  }
}
