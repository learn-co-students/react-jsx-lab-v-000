import React, { Component } from 'react';
import FillerText from './FillerText';
export default class Webpage extends Component {
  render() {
    return (
      <title>
        The world's coolest webpage
        <FillerText />
        <FillerText />
      </title>

    )
  }
}
