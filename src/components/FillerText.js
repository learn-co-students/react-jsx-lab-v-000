import React from 'react';

const fillerContent = "I am a filler text. I can be used to fill your screen. Amazing!"

export class FillerText extends React.Component {
  render() {
    return (
      <p>{fillerContent}{this.props.content}</p>
    )
  }
}

export default FillerText;
