import React from 'react';
import '../styles/ColorDot.scss';

function ColorDot(props) {
  let shape = 'dot';
  if (props.shape) {
    shape = props.shape;
  }

  return (
    <div className="stack">
      <div
        className={`color-${shape} ${props.color}`}
        data-color={props.color}
      ></div>
      {props.count >= 2 && (
        <div
          className={`color-${shape} ${props.color} second`}
          data-color={props.color}
        ></div>
      )}
      {props.count > 2 && (
        <div
          className={`color-${shape} ${props.color} third`}
          data-color={props.color}
        ></div>
      )}
    </div>
  );
}

export default ColorDot;
