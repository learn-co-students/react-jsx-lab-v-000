import React from 'react';

 class FillerText extends React.Component{
   constructor(props) {
       super(props);
       this.textInput = React.createRef();

     }

  render(){
    return(
      <p ref={this.textInput}>I am a filler text. I can be used to fill your screen. Amazing!</p>
      
    );
  }
}
export default FillerText
