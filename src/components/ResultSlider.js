import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Slider } from 'material-ui-slider';
import '../styles/ResultSlider.scss';
import { COLOR_CODES } from '../colors.js';

const ResultSlider = ({data, color}) => {
  console.log("Data: ", {data, color})
  const [tapped, setTapped] = useState(0);

const handleChange = value => {
  setTapped(value);
}

const getUntappedValue = numTapped => {
  if (numTapped < 0) return 'error';
  return data[numTapped] || getUntappedValue(numTapped - 1);
}


  return (
    <div className="result-slider">
      <p>Tapped: {tapped}</p>
      <p>Untapped: {getUntappedValue(tapped)}</p>
      <Slider
       defaultValue={0}
       color={COLOR_CODES[color]}
       min={0}
       max={12}
       onChange={handleChange}
      />
    </div>
  )
};

export default ResultSlider;
