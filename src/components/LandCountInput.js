import React, { Component } from 'react';
import ColorDot from './ColorDot';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import '../styles/LandCountInput.scss';


export default class LandCountInput extends Component {

  constructor() {
    super();

    this.state = {
      sources: 1,
      turn: 1
    }
  }

  onCountChange = sources => {
    this.setState({ sources });
    this.props.handleLandInputChange(this.props.color, "sources", sources);
  }

  onTurnChange = turn => {
    this.setState({ turn });
    this.props.handleLandInputChange(this.props.color, "turn", turn)
  }

  render() {
    return (
      <div className="land-sources-input">
        <InputNumber className="input-number sources-needed-input"
          min={1}
          max={6}
          value={this.state.sources}
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
