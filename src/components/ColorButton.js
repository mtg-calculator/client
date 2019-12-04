import React from 'react';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ColorDot from './ColorDot';
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
      <div className={classes.colorBtn} onClick={props.handleClick} >
        <Fab variant='contained' size='small' style={{backgroundColor: props.color}}></Fab>
        {/* <ColorDot color={props.color} /> */}
      </div>
    )

}

export default ColorButton
