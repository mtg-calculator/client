import React from 'react';
import '../styles/ColorDot.scss';

function ColorDot(props) {
  return (
    <div className={`color-dot ${props.color}`} data-color={props.color}></div>
  )
}

export default ColorDot;