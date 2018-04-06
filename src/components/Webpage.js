import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './RegistrationForm';
import FillerText from './FillerText';

export class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h3>The world&apos;s coolest webpage</h3>
        <FillerText content={"Here is some text."} />
        <FillerText content={"And here is some more text."} />
      </div>
    )
  }
}

export default Webpage;
