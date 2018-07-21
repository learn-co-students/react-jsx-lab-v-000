import React from 'react';
import FillerText from '../components/FillerText';

class Webpage extends React.Component{
  constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }

  render(){
    return(
      <div>
        <title>The world's coolest webpage</title>
        <FillerText ref={this.textInput}/>
        <FillerText ref={this.textInput}/>
      </div>


    )
  }
}
  export default Webpage
