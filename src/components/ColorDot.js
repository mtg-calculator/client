import React from 'react';
import '../styles/ColorDot.scss';

function ColorDot(props) {
  let shape = 'dot';
  if (props.shape) {
    shape = props.shape;
  }
  let count = 1;
  if (props.count || props.count === 0) {
    count = props.count;
  }
  let visible = '';
  if (count <= 0) {
    visible = 'invisible';
  }

  return (
    <div className={`stack ${visible}`}>
      <div
        className={`color-${shape} ${props.color}`}
        data-color={props.color}
      ></div>
      {count >= 2 && (
        <div
          className={`color-${shape} ${props.color} second`}
          data-color={props.color}
        ></div>
      )}
      {count > 2 && (
        <div
          className={`color-${shape} ${props.color} third`}
          data-color={props.color}
        ></div>
      )}
    </div>
  );
}

export default ColorDot;
