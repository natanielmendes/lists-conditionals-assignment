import React from 'react';

const validation = (props) => {
  let displayText = <p>Text too short</p>;

  if (props.textLength >= 5) {
    displayText = <p>Text long enough</p>;
  }

  return (
    <div>
      {displayText}
    </div>
  )
}

export default validation;