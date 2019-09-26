import React, { Component } from 'react';
import DeckSizeSelector from './DeckSizeSelector';
import ColorButton from './ColorButton';
import LandCountInput from './LandCountInput';
import 'rc-input-number/assets/index.css';
import '../styles/InputForm.scss';
import {COLORS} from '../colors.js';

export default class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckSize: 40,
      colors: {},
    }
  }

  handleDeckSizeSelect = deckSize => {
    this.setState({ deckSize })
  }

  handleColorClick = event => {
    const { color } = event.target.dataset;
    if (!this.state.colors[color]) {
      this.setState({
        colors: {
          ...this.state.colors,
          [color]: { sources: 1, turn: 1 }
        }
      });
    }
  }

  handleRemoveColor = removedColor => {
    this.setState(prevState => {
      const { [removedColor]:value, ...otherColors } = prevState.colors;
      return { colors: otherColors };
    });
  }

  handleLandInputChange = (color, type, qty) => {
    this.setState(prevState => ({
      colors: {
        ...prevState.colors,
        [color]: {
          ...prevState.colors[color],
          [type]: qty
        }
      }
    }));
  }

  handleFormSubmit = async event => {
    event.preventDefault();
    const url = 'https://mtg-calculator-api.herokuapp.com/api/calculate';
    const formObj = {};
    Object.keys(this.state.colors).forEach(color => {
      formObj[color] = {
        deck_size: this.state.deckSize,
        achieve_chance: 80,
        sources: this.state.colors[color].sources,
        on_turn: this.state.colors[color].turn
      }
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formObj)
    });
    const answer = await response.json();
    console.log(answer);
  }

  render() {
    return (
      <form className="input-form" onSubmit={this.handleFormSubmit}>

        <DeckSizeSelector onChange={this.handleDeckSizeSelect} />

        <div className="color-btns">
          { COLORS.map(color =>  <ColorButton color={color} handleClick={this.handleColorClick} key={color} />
          )}
        </div>

        { Object.keys(this.state.colors).map(color => (
          <LandCountInput
            color={color}
            handleLandInputChange={this.handleLandInputChange}
            handleRemoveColor={() => this.handleRemoveColor(color)}
            key={color} />
        ))}

        <button className="submit">Submit</button>
      </form>
    )
  }
}
