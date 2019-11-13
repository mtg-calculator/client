import React, { useState } from 'react';
import ColorDot from './ColorDot';
import Slider from '@material-ui/core/Slider';
import '../styles/ResultSlider.scss';
import { makeStyles } from '@material-ui/core/styles';
import { COLOR_CODES } from '../colors.js';

const useStyles = makeStyles({
 slider: ({color}) => ({
   color: COLOR_CODES[color],
   marginTop: '1rem'
 }),
 stacks: {
   display: 'flex',
   justifyContent: 'space-between',

 }
})

const ResultSlider = ({ data, color }) => {
  const [tapped, setTapped] = useState(0);
  const marks = data.reduce((accum, curr, i) => {
    if (curr !== null) accum.push({ value: i, label: i });
    return accum;
  }, []);

  const handleChange = (event, value) => {
    setTapped(value);
  };

  const getUntappedValue = numTapped => {
    if (numTapped < 0) return 'error';
    if (data[numTapped] || data[numTapped] === 0) {
      return data[numTapped];
    }
    return getUntappedValue(numTapped - 1);
  };

  const classes = useStyles({color});
  return (
    <div className="result-slider">
      <div className={`${classes.stacks}`}>
        <div>
          <p>Tapped: {tapped}</p>
          <ColorDot color={color} shape="tapped" count={tapped} />
        </div>
        <div>
          <p>Untapped: {getUntappedValue(tapped)}</p>
          <ColorDot
            color={color}
            shape="untapped"
            count={getUntappedValue(tapped)}
          />
        </div>
      </div>
      <Slider
        className={`${classes.slider}`}
        defaultValue={0}
        marks={marks}
        valueLabelDisplay="off"
        max={marks[marks.length - 1].value}
        onChange={handleChange}
      />

    </div>
  );
};

export default ResultSlider;
