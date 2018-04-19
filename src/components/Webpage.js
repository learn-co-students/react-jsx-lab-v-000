import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText.js'

class Webpage extends React.Component {
  render (){
    return (
      <div>
      <h3>The world's coolest webpage.</h3>
      <FillerText />
      <FillerText />
      </div>
    );
  }
}

export default Webpage;
