import React, { useState } from 'react';
import { Slider } from 'material-ui-slider';
import ColorDot from './ColorDot';
import '../styles/ResultSlider.scss';
import { COLOR_CODES } from '../colors.js';

const ResultSlider = ({ data, color }) => {
  console.log('Data: ', { data, color });
  const [tapped, setTapped] = useState(0);

  const handleChange = value => {
    setTapped(value);
  };

  const getUntappedValue = numTapped => {
    if (numTapped < 0) return 'error';
    if (data[numTapped] || data[numTapped] === 0) {
      return data[numTapped];
    }
    return getUntappedValue(numTapped - 1);
  };

  return (
    <div className="result-slider">
      <p>Untapped: {getUntappedValue(tapped)}</p>
      <ColorDot
        color={color}
        shape="untapped"
        count={getUntappedValue(tapped)}
      />
      <Slider
        defaultValue={0}
        color={COLOR_CODES[color]}
        min={0}
        max={data.length - 1}
        onChange={handleChange}
      />
      <p>Tapped: {tapped}</p>
      <ColorDot color={color} shape="tapped" count={tapped} />
    </div>
  );
};

export default ResultSlider;
