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
      deckSize: null,
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
          [color]: { qty: 1, turn: 1 }
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

  handleLandInputChange = (color, type, num) => {
    this.setState(prevState => ({
      colors: {
        ...prevState.colors,
        [color]: {
          ...prevState.colors[color],
          [type]: num
        }

      }
    }));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event.target);
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
