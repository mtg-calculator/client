import React, { Component } from 'react';
import ColorButton from './ColorButton';
import 'rc-input-number/assets/index.css';
import InputNumber from 'rc-input-number';
import '../styles/InputForm.scss';

export default class InputForm extends Component {
  state = {
    value: 1
  }

  onChange = value => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="num-input">
        <h3>Input form</h3>
        <InputNumber class="custom"
        min={1}
        max={6}
        value={this.state.value}
        onChange={this.onChange}
        />
        <ColorButton color="white" />

      </div>
    )
  }
}
