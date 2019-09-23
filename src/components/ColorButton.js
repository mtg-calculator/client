import React, { Component } from 'react';
import ColorDot from './ColorDot';

export default class ColorButton extends Component {
  render() {
    return (
      <div className="color-btn" onClick={this.props.handleClick}>
        <ColorDot color={this.props.color} />
      </div>
    )
  }
}
