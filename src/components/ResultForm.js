import React from 'react';
import ResultSlider from './ResultSlider';
import Button from '@material-ui/core/Button';
import ColorDot from './ColorDot';
import '../styles/ResultForm.scss';

const ResultForm = ({ results, onReset }) => {
  console.log('Server response: ', results);

  const items = [];

  Object.keys(results).forEach(color => {
    let landString = 'Tapped:Untapped; ';
    for (let i = 0; i < results[color].length; i++) {
      if (results[color][i] || results[color][i] === 0) {
        landString = `${landString} ${i}:${results[color][i]}, `;
      }
    }
    landString = landString.slice(0, -2);

    items.push(
      <section key={color}>
        <ColorDot color={color} shape="untapped" count={3} />
        <div>{landString}</div>
      </section>
    );
  });

  return (
    <section>
      {Object.keys(results).map(result => (
        <ResultSlider
          data={results[result]}
          color={result}
          key={result.color}
        />
      ))}
      <Button
        className="buttonReset"
        variant="contained"
        onClick={onReset}
        color="primary"
      >
        Reset
      </Button>
    </section>
  );
};

export default ResultForm;
