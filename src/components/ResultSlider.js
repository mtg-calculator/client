import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Slider } from 'material-ui-slider';
import '../styles/ResultSlider.scss';
import { COLOR_CODES } from '../colors.js';

// import DeckSizeSelector from './DeckSizeSelector';
// import ColorsSelector from './ColorsSelector';
// import LandInputsField from './LandInputsField';
// import 'rc-input-number/assets/index.css';
// import '../styles/InputForm.scss';
// import { checkForm, formatSubmission } from '../utils/formUtils';

const ResultSlider = ({data, color}) => {
  console.log("Data: ", {data, color})
  // const [deckSize, setDeckSize] = useState(null);
  // const [colors, setColors] = useState({});
  // const [errors, setErrors] = useState({});
  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setErrors(checkForm({ deckSize, colors }));
  // }, [deckSize, colors]);


  return (
    <div className="result-slider">
      <Slider
       defaultValue={0}
       color={COLOR_CODES[color]}
       min={0}
       max={12}
      />
    </div>
  )
};

export default ResultSlider;
