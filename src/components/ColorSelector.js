import React from 'react';
import ColorButton from './ColorButton';
import ErrorMessage from './ErrorMessage';
import {COLORS} from '../colors.js';

const ColorSelector = ({handleColorClick, errors, submitted}) => {

  return (
    <div className="input-wrapper">
    <div className="color-btns">
      { COLORS.map(color =>  <ColorButton color={color} handleClick={handleColorClick} key={color} />
      )}
      </div>
    <ErrorMessage showError={errors.noColors && submitted} msg="You need to select at least one color"/>
  </div>
  );
}

export default ColorSelector;