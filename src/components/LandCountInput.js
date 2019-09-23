import React, { Component } from 'react';
import ColorDot from './ColorDot';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import '../styles/LandCountInput.scss';


export default class LandCountInput extends Component {

  constructor() {
    super();

    this.state = {
      count: 1,
      turn: 1
    }
  }

  onCountChange = count => {
    this.setState({ count });
  }

  onTurnChange = turn => {
    this.setState({ turn });
  }

  render() {
    return (
      <div className="land-count-input">
        <InputNumber className="input-number count-needed-input"
          min={1}
          max={6}
          value={this.state.count}
          onChange={this.onCountChange}
        />
        <ColorDot className="color-dot" color={this.props.color} />
        <p className="label-text">needed by turn </p>
        <InputNumber className="input-number turn-needed-input"
          min={1}
          max={8}
          value={this.state.turn}
          onChange={this.onTurnChange}
        />
        <div className="close" onClick={this.props.handleRemoveColor}></div>
      </div>
    )
  }
}
