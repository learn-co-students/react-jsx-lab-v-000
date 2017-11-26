import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';
import CatPic from './CatPic';

class WebPage extends React.Component {
  render(){
    return(
      <div>
        <p>The world's coolest webpage</p>
        <FillerText />
        <FillerText />
        <CatPic />
      </div>
    )
  }
};

export default WebPage;