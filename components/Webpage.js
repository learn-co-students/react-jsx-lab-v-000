import React from 'react';
import FillerText from './FillerText';

var title = "The world's coolest webpage";

class Webpage extends React.Component {
  render(){
    return(
      <div>
        <title>{title}</title>
        <FillerText />
        <FillerText />
      </div>
    )
  }
};

export default Webpage;
