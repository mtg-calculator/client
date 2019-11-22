import React, { useState, useEffect } from 'react';
import DeckSizeSelector from './DeckSizeSelector';
import ColorsSelector from './ColorsSelector';
import LandInputsField from './LandInputsField';
import 'rc-input-number/assets/index.css';
import '../styles/InputForm.scss';
import { checkForm, formatSubmission } from '../utils/formUtils';

const InputForm = props => {
  const [deckSize, setDeckSize] = useState(null);
  const [colors, setColors] = useState({});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrors(checkForm({ deckSize, colors }));
  }, [deckSize, colors]);

  const handleDeckSizeSelect = deckSize => {
    setDeckSize(deckSize);
  };

  const handleColorClick = event => {
    const { color } = event.target.dataset;
    console.log(color);
    if (color) {
      if (!colors[color]) {
        setColors({
          ...colors,
          [color]: { sources: 1, turn: 1 }
        });
      }
    }
  };

  const handleRemoveColor = removedColor => {
    setColors(prevColors => {
      const { [removedColor]: value, ...otherColors } = prevColors;
      return otherColors;
    });
  };

  const handleLandInputChange = (color, type, qty) => {
    setColors(prevColors => ({
      ...prevColors,
      [color]: {
        ...prevColors[color],
        [type]: qty
      }
    }));
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const url = 'https://mtg-calculator-api.herokuapp.com/api/calculate';
    setSubmitted(true);

    const formErrors = checkForm({ deckSize, colors });
    setErrors(formErrors);
    console.log('errors: ', Object.keys(formErrors).length);
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);
      const formObj = formatSubmission({ deckSize, colors });
      console.log(formObj);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
      });
      const answer = await response.json();
      props.onSubmit(answer);
    } else {
      // TODO: display error messages to user
      console.log('Form not submitted: ', errors);
    }
  };

  return (
    <form className="input-form" onSubmit={handleFormSubmit}>
      {loading ? (
        <img className="loader" src="img/rainbowloading.gif" alt="Loading" />
      ) : (
        <React.Fragment>
          <DeckSizeSelector
            onChange={handleDeckSizeSelect}
            showError={errors.noDeckSize && submitted}
          />

          <ColorsSelector
            handleColorClick={handleColorClick}
            errors={errors}
            submitted={submitted}
          />

          <LandInputsField
            colors={colors}
            handleLandInputChange={handleLandInputChange}
            handleRemoveColor={handleRemoveColor}
            errors={errors}
            submitted={submitted}
          />

          <button className="submit">Submit</button>
        </React.Fragment>
      )}
    </form>
  );
};

export default InputForm;
