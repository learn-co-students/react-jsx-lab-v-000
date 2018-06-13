import React from "react"
import FillerText from "./FillerText"

class Webpage extends React.Component{

  render(){
    return(
      <div>
        <h2>The world's coolest webpage</h2>

        <FillerText content />
        <FillerText content />
      </div>
    );
  }
};

export default Webpage;
