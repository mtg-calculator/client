import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultForm from './components/ResultForm';

function App() {
  const [results, setResults] = useState(null);

  const handleInputSubmit = resultData => {
    setResults(resultData);
  };
  const handleResultReset = () => {
    setResults(null);
  };

  return (
    <div className="App">
      <Header />
      {!results && <InputForm onSubmit={handleInputSubmit} />}
      {results && <ResultForm results={results} onReset={handleResultReset} />}
    </div>
  );
}

export default App;
