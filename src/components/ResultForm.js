import React from 'react';
import ResultSlider from './ResultSlider';
import ColorDot from './ColorDot';

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
      <div>{items}</div>
      {Object.keys(results).map(result => (
        <ResultSlider
          data={results[result]}
          color={result}
          key={result.color}
        />
      ))}
      <button onClick={onReset}>Reset</button>
    </section>
  );
};

export default ResultForm;
