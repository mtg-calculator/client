import React from 'react';
import '../styles/ColorButton.scss';

function ColorButton(props) {
  return (
    <div className={`color-btn ${props.color}`} onClick={() => console.log('clicked ', props.color)} ></div>
  )
}

export default ColorButton;