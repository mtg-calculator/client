import React from 'react';
import ResultSlider from './ResultSlider';

const ResultForm = ({results, onReset}) => {
  console.log('Server response: ', results);

  const items = [];

  Object.keys(results).forEach(color => {
    let landString = 'Tapped:Untapped; ';
    for (let i = 0; i < results[color].length; i++) {
      if (results[color][i]) {
        landString = `${landString} ${i}:${results[color][i]}, `;
      }
    }
    landString = landString.slice(0, -2);

    items.push(
      <section key={color}>
        <div>{color}</div>
        <div>{landString}</div>
      </section>
    );
  });

  return (
    <section>
      <div>{items}</div>
      <button onClick={onReset}>Reset</button>
    </section>
  );
};

export default ResultForm;
