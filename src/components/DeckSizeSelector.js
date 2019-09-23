import React, { Component } from 'react';
import '../styles/DeckSizeSelector.scss';

export default class DeckSizeSelector extends Component {
  render() {
    return (
      <div className="deck-size-selector">
        <h3>Deck size:</h3>
        <input type="radio" id="40-deck" name="deck-size" value="40" />
        <label htmlFor="40-deck">40</label>
        <input type="radio" id="60-deck" name="deck-size" value="60" />
        <label htmlFor="60-deck">60</label>
        <input type="radio" id="100-deck" name="deck-size" value="100" />
        <label htmlFor="100-deck">100</label>
      </div>
    )
  }
}
