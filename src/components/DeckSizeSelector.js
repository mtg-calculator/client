import React, { Component } from 'react';
import '../styles/DeckSizeSelector.scss';

export default class DeckSizeSelector extends Component {
  state = {
    deckSize: 40,
  }

  handleOptionChange = event => {
    this.setState({ deckSize: +event.target.value}, () => {
      this.props.onChange(this.state.deckSize);
    })

  }

  render() {
    return (
      <div className="deck-size-selector">
        <h3>Deck size:</h3>
        <input type="radio" id="40-deck" name="deck-size" value="40" checked={this.state.deckSize === 40} onChange={this.handleOptionChange} />
        <label htmlFor="40-deck">40</label>
        <input type="radio" id="60-deck" name="deck-size" value="60" checked={this.state.deckSize === 60} onChange={this.handleOptionChange}/>
        <label htmlFor="60-deck">60</label>
        <input type="radio" id="100-deck" name="deck-size" value="100" checked={this.state.deckSize === 100} onChange={this.handleOptionChange}/>
        <label htmlFor="100-deck">100</label>
      </div>
    )
  }
}
