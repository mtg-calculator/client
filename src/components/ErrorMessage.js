import React from 'react';
import '../styles/ErrorMessage.scss';

const ErrorMessage = ({msg, showError}) => <p className={`error ${showError ? '' : 'hidden'}` }>{`*${msg || ' input error'}`}</p>

export default ErrorMessage;