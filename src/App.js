import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputNumber from 'rc-input-number';
import Header from './components/Header';
import  InputForm from './components/InputForm';
// const InputNumber = require('rc-input-number');

function App() {
  return (
    <div className="App">
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
