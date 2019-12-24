import React, { useState, useEffect } from 'react';
import { Grid, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import '../styles/DeckSizeSelector.scss';
// import ErrorMessage from './ErrorMessage';

const useStyles = makeStyles(theme => ({
  chip: {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}))

const DeckSizeSelector = ({ onChange, showError }) => {
  const classes = useStyles();
  const [deckSize, setDeckSize] = useState(60);

  const handleChange = value => {
    setDeckSize(value);
  };

  useEffect(() => {
    onChange(deckSize);
  }, [onChange, deckSize]);

  const chipData = [
    { key: 40, value: 40},
    { key: 60, value: 60},
    { key: 100, value: 100},
  ]

  return (
    <Grid className="deck-size-selector" xs={12}>
      <Typography variant="h6">
        Deck Size
      </Typography>
      {chipData.map(chip => <Chip
        key={chip.key}
        className={classes.chip}
        label={chip.value}
        clickable
        variant='default'
        onClick={() => handleChange(chip.value)}
        color={deckSize === chip.value ? 'primary' : 'default'}
      />)}
    </Grid>

  );
};

export default DeckSizeSelector;
