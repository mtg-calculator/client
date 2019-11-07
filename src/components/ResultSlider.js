import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
// import DeckSizeSelector from './DeckSizeSelector';
// import ColorsSelector from './ColorsSelector';
// import LandInputsField from './LandInputsField';
// import 'rc-input-number/assets/index.css';
// import '../styles/InputForm.scss';
// import { checkForm, formatSubmission } from '../utils/formUtils';

const ResultSlider = props => {
  console.log("Data: ", props.data)
  // const [deckSize, setDeckSize] = useState(null);
  // const [colors, setColors] = useState({});
  // const [errors, setErrors] = useState({});
  // const [submitted, setSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setErrors(checkForm({ deckSize, colors }));
  // }, [deckSize, colors]);


  return (
    <div>
      <Slider />
    </div>
  )
};

export default ResultSlider;
