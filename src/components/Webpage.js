import React from 'react';
import FillerText from './FillerText';

export default class WebPage extends React.Component{
  render(){
    return (
      <div>
        <title>The world's coolest webpage</title>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}
