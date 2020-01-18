import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {COLOR_CODES} from '../colors.js';
import '../styles/ColorButton.scss';

const useStyles = makeStyles(theme => ({
  colorBtn: {
    padding: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}))

const ColorButton = props => {

  const classes = useStyles();
  return (
      <div className={classes.colorBtn} onClick={props.handleClick}>
        <Fab size='small' style={{backgroundColor: COLOR_CODES[props.color]}} ><p color={props.color} ></p></Fab>
      </div>
    )

}

export default ColorButton
