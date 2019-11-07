import React from 'react';
import ColorDot from './ColorDot';

const ResultForm = props => {
  console.log('Server response: ', props.results);

  const items = [];

  Object.keys(props.results).forEach(color => {
    let landString = 'Tapped:Untapped; ';
    for (let i = 0; i < props.results[color].length; i++) {
      if (props.results[color][i]) {
        landString = `${landString} ${i}:${props.results[color][i]}, `;
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
      <button onClick={props.onReset}>Reset</button>
    </section>
  );
};

export default ResultForm;
