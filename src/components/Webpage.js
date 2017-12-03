import React from 'react';

import FillerText from './FillerText';

const paragraph = React.createElement( 'p', {}, "The world's coolest webpage"
)

class Webpage extends React.Component {
  render() {
    return (
      <div>
        {paragraph}
        <FillerText />
        <FillerText />
      </div>
    )
  }
}

export default Webpage;
