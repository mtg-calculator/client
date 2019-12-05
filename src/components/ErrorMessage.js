import React from 'react';
import { Typography } from '@material-ui/core';
import '../styles/ErrorMessage.scss';

const ErrorMessage = ({msg, showError}) => <Typography variant="caption"  className={`error ${showError ? '' : 'hidden'}` }>{`*${msg || ' input error'}`}</Typography>

export default ErrorMessage;