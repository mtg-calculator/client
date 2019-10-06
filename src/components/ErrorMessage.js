import React from 'react';
import '../styles/ErrorMessage.scss';


const ErrorMessage = ({msg}) => <p className={msg ? '' : 'hidden'}>{msg || 'Error message goes here'}</p>

export default ErrorMessage;