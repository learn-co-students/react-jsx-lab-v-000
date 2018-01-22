import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';

const page = React.createElement('div', {}, "The world's coolest webpage")

class Webpage extends React.Component{
  render(){
    return (
      <div>
        {page}
        < FillerText />
        < FillerText />
      </div>
    )
  }
}

export default Webpage;
