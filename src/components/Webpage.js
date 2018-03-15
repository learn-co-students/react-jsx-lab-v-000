import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './FillerText';

class Webpage extends React.Component {
  render() {
    return (<div> 
      <h1>The world's coolest webpage</h1>
        <p> <FillerText/> </p>
        <p> <FillerText/> </p>
      </div>)
  }
};

export default Webpage;

ReactDOM.render(
  <FillerText />,
  document.getElementById('global')
);