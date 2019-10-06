import React, { useState } from 'react';
import ColorDot from './ColorDot';
import InputNumber from 'rc-input-number';
import 'rc-input-number/assets/index.css';
import '../styles/LandCountInput.scss';
import ErrorMessage from './ErrorMessage';

const LandCountInput = props => {
  const { handleLandInputChange, handleRemoveColor, color, msg, showError } = props;

  const [sourceCount, setSourceCount] = useState(1);
  const [turn, setTurn] = useState(1);

  const onCountChange = sources => {
    setSourceCount(sources);
    handleLandInputChange(color, "sources", sources);
  }

  const onTurnChange = turn => {
    setTurn(turn);
    handleLandInputChange(color, "turn", turn);
  }

  return (
    <div className="land-sources-input">
      <InputNumber className="input-number sources-needed-input"
        min={1}
        max={6}
        value={sourceCount}
        onChange={onCountChange}
      />
      <ColorDot className="color-dot" color={color} />
      <p className="label-text">needed by turn </p>
      <InputNumber className="input-number turn-needed-input"
        min={1}
        max={8}
        value={turn}
        onChange={onTurnChange}
      />
      <div className="close" onClick={handleRemoveColor}></div>
      <ErrorMessage msg={msg} showError={showError} />
    </div>
  );
}

export default LandCountInput;
