import React, { useState } from 'react';
import DeckSizeSelector from './DeckSizeSelector';
import ColorButton from './ColorButton';
import LandCountInput from './LandCountInput';
import 'rc-input-number/assets/index.css';
import '../styles/InputForm.scss';
import {checkForm, formatSubmission} from '../utils/formUtils';
import {COLORS} from '../colors.js';

const InputForm = () => {
  const [deckSize, setDeckSize] = useState(null);
  const [colors, setColors] = useState({});

  const handleDeckSizeSelect = deckSize => {
    setDeckSize(deckSize);
  }

  const handleColorClick = event => {
    const { color } = event.target.dataset;
    if (!colors[color]) {
      setColors({
        ...colors,
        [color]: { sources: 1, turn: 1}
      });
    }
  }

  const handleRemoveColor = removedColor => {
    setColors(prevColors => {
      const { [removedColor]: value, ...otherColors } = prevColors;
      return otherColors ;
    });
  }

  const handleLandInputChange = (color, type, qty) => {
    setColors(prevColors => ({
      ...prevColors,
      [color]: {
        ...prevColors[color],
        [type]: qty
      }
    }))
  }

  const handleFormSubmit = async event => {
    event.preventDefault();
    const url = 'https://mtg-calculator-api.herokuapp.com/api/calculate';

    const errors = checkForm({deckSize, colors});

    if (Object.keys(errors).length === 0) {
      const formObj = formatSubmission({deckSize, colors});
      console.log(formObj);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formObj)
      });
      const answer = await response.json();
      console.log('Server response: ', answer);
    } else {
      // TODO: display error messages to user
      console.log('Form not submitted: ', errors)
    }
  }

  return (
    <form className="input-form" onSubmit={handleFormSubmit}>

      <DeckSizeSelector onChange={handleDeckSizeSelect} />

      <div className="color-btns">
        { COLORS.map(color =>  <ColorButton color={color} handleClick={handleColorClick} key={color} />
        )}
      </div>

      { Object.keys(colors).map(color => (
        <LandCountInput
          color={color}
          handleLandInputChange={handleLandInputChange}
          handleRemoveColor={() => handleRemoveColor(color)}
          key={color} />
      ))}

      <button className="submit">Submit</button>
    </form>
  );
}

export default InputForm;
