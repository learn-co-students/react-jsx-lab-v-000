import React from 'react'
import FillerText from './FillerText';
import ReactDOM from 'react-dom';

class Webpage extends React.Component {
  render() {
    return (
      <div className="registrationForm">
        <title>The worlds coolest webpage.</title>
      </div>
    );
  }
}

export default Webpage;

ReactDOM.render(
  <FillerText />,
  document.getElementById('root')
);
