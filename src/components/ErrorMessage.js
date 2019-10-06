import React from 'react';
import '../styles/ErrorMessage.scss';

const ErrorMessage = ({msg, showError}) => <p className={`error ${showError ? '' : 'hidden'}` }>{msg || 'Error'}</p>

export default ErrorMessage;