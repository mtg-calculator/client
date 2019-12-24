import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import InputForm from './components/InputForm';
import ResultForm from './components/ResultForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  app: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    textAlign: "center",
    flexGrow: 1,
  },
  paper: {
    height: "100%",
  }
}))

function App() {
  const [results, setResults] = useState(null);

  const handleInputSubmit = resultData => {
    setResults(resultData);
  };
  const handleResultReset = () => {
    setResults(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Paper className={classes.paper} elevation={10} square="true">
      <Header />
      {!results && <InputForm onSubmit={handleInputSubmit} />}
      {results && <ResultForm results={results} onReset={handleResultReset} />}
      </Paper>
    </div>
  );
}

export default App;
