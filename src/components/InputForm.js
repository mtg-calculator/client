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
      value: 1,
      colors: []
    }
  }

  handleColorClick = event => {
    const { color } = event.target.dataset;
    if (!this.state.colors.includes(color)) {
      this.setState(prevState => prevState.colors.push(color))
    }
  }

  render() {
    return (
      <div className="input-form">

        <DeckSizeSelector />

        <div className="color-btns">
          { COLORS.map(color =>  <ColorButton color={color} handleClick={this.handleColorClick} key={color} />
          )}
        </div>

        { this.state.colors.map(color => <LandCountInput color={color} key={color} />)}

        <button>Submit</button>
      </div>
    )
  }
}
