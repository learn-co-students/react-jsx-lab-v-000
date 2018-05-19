
import React from 'react';

import FillerText from './FillerText';

export default class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    )
  }
}


// This is what I had.  For some reason, it's not working.  Getting an error about no closing tag.
// Problem is likely that I forgot the div!!
// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import FillerText from './components/FillerText.js';
//
// class Webpage extends React.Component {
//   render() {
//     return (
//       <title>The world's coolest webpage</title>
//       <FillerText />
//       <FillerText />
//
//     )
//   }
// }
//
// export default Webpage;
