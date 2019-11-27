import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import '../styles/DeckSizeSelector.scss';
// import ErrorMessage from './ErrorMessage';

const DeckSizeSelector = ({ onChange, showError }) => {
  const [deckSize, setDeckSize] = useState(60);

  const handleChange = event => {
    console.log(event.target.value)
    setDeckSize(+event.target.value);
  };
  useEffect(() => {
    onChange(deckSize);
  }, [onChange, deckSize]);

  return (
      <Grid className="deck-size-selector" xs={12}>
        <FormControl>
          <FormLabel>Deck Size</FormLabel>
          <RadioGroup name="deck-size" value={deckSize} onChange={handleChange} row>
            <FormControlLabel
              value="40"
              control={<Radio checked={deckSize === 40} color='primary' />}
              label="40"
              labelPlacement="end">
            </FormControlLabel>
            <FormControlLabel
              value="60"
              control={<Radio checked={deckSize === 60} color='primary' />}
              label="60"
              labelPlacement="end">
            </FormControlLabel>
            <FormControlLabel
              value="100"
              control={<Radio checked={deckSize === 100} color='primary' />}
              label="100"
              labelPlacement="end">
            </FormControlLabel>
          </RadioGroup>
        </FormControl>
      </Grid>
  );
};

export default DeckSizeSelector;
