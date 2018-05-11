import React from 'react'
import ReactDOM from 'react-dom'
import FillerText from './FillerText'

class WebPage extends React.Component {
  render() {
    return (
        <html>
          <title>The world's coolest webpage</title>
          <FillerText />
          <FillerText />
        </html>
      );
  }
}

export default WebPage;