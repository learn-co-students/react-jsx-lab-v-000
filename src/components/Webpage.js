import React from 'react';
import FillerText from './FillerText';
class Webpage extends React.Component{
  render(){
    return (
      <html>
        <head>
          <title>The worlds coolest webpage</title>
        </head>
        <body>
          <FillerText />
          <FillerText />
        </body>
      </html>
    );
  }
}
export default Webpage
