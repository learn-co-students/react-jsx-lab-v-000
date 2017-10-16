import FillerText from './FillerText';

import React from 'react';

class Webpage extends React.Component {
  render() {
    return (
      <div className="webpage">
        <form>
          <title>The world's coolest webpage</title>
          <FillerText />
          <FillerText />
        </form>
      </div>
    );
  }
}

export default Webpage;
