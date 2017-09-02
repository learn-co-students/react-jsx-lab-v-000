import React, { Component } from 'react';
import FillerText from './FillerText.js';

export default class Webpage extends Component {
  render(){
    return(
      <div>
        <title>The world's coolest webpage</title>
        <FillerText />
        <FillerText />        
      </div>
    )
  }
}
