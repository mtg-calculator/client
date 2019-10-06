import React, { useState, useEffect } from 'react';
import '../styles/DeckSizeSelector.scss';
import ErrorMessage from './ErrorMessage';

const DeckSizeSelector = ({onChange, showError}) => {
  const [deckSize, setDeckSize] = useState(null);

  const handleOptionChange = event => {
    setDeckSize(+event.target.value);
  }
  useEffect(() => {
    onChange(deckSize);
  }, [onChange, deckSize]);

  return (
    <div className="input-wrapper">
      <div className="deck-size-selector">
        <h3>Deck size:</h3>
        <input type="radio" id="40-deck" name="deck-size" value="40" checked={deckSize === 40} onChange={handleOptionChange} />
        <label htmlFor="40-deck">40</label>
        <input type="radio" id="60-deck" name="deck-size" value="60" checked={deckSize === 60} onChange={handleOptionChange}/>
        <label htmlFor="60-deck">60</label>
        <input type="radio" id="100-deck" name="deck-size" value="100" checked={deckSize === 100} onChange={handleOptionChange}/>
        <label htmlFor="100-deck">100</label>
      </div>
      <ErrorMessage msg="You need to select a deck size" showError={showError}  />
    </div>
  )
}

export default DeckSizeSelector;
