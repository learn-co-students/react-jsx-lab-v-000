import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!
import FillerText from './FillerText'

class Webpage extends React.Component {

  render() {
    return (
      <div>
        <title>
          The world's coolest webpage
        </title>
        <FillerText/>
        <FillerText/>
      </div>
    )
  }
}
export default Webpage