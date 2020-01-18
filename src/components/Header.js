import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: theme.spacing(4),
    fontWeight: '700'
  }
}))

function Header() {
  const classes = useStyles();
  return <Typography variant="h4" className={classes.header} gutterBottom>LAND CALCULATOR</Typography>
}

export default Header
