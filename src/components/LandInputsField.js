import React from 'react';
import LandInput from './LandInput';

const LandInputsField = props => {

  const { colors, handleLandInputChange, handleRemoveColor, errors, submitted } = props;

  return (
    <div>
      { Object.keys(colors).map(color => (
        <LandInput
          color={color}
          handleLandInputChange={handleLandInputChange}
          handleRemoveColor={() => handleRemoveColor(color)}
          showError={errors.colorCount && errors.colorCount.includes(color) && submitted}
          msg="Required count cannot exceed turn number"
          key={color} />
      ))}
  </div>
  );
}

export default LandInputsField;