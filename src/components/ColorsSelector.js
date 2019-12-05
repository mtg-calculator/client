import React from 'react';
import { Typography } from '@material-ui/core';
import ColorButton from './ColorButton';
import ErrorMessage from './ErrorMessage';
import {COLORS} from '../colors.js';

const ColorsSelector = ({handleColorClick, errors, submitted}) => {

  return (
    <div className="input-wrapper">
      <Typography variant="h6">
        Mana Needed
      </Typography>

      <div className="color-btns">
        { COLORS.map(color =>  <ColorButton color={color} handleClick={handleColorClick} key={color} />
        )}
        </div>
      <ErrorMessage showError={errors.noColors && submitted} msg="At least one color must be selected"/>
    </div>
  );
}

export default ColorsSelector;