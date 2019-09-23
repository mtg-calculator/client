import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorButton from './ColorButton';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import '../styles/LandCountInput.scss';


export default class LandCountInput extends Component {
  static propTypes = {
    prop: PropTypes
  }

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
        <ColorButton color={this.props.color} />
        <p>needed by turn </p>
        <InputNumber className="input-number turn-needed-input"
          min={1}
          max={8}
          value={this.state.turn}
          onChange={this.onTurnChange}
        />

      </div>
    )
  }
}
