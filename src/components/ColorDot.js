import React from 'react';
import '../styles/ColorDot.scss';

function createLinearGradient(colors = [], shape = 'untapped') {
  let direction = 'top';
  if (shape === 'tapped') {
    direction = 'right';
  }

  let gradientString = `linear-gradient(to ${direction}`;
  for (let i = 1; i <= colors.length; i++) {
    gradientString = `${gradientString}, ${colors[i - 1]} ${(100 /
      colors.length) *
      (i - 1)}%, ${colors[i - 1]} ${(100 / colors.length) * i}%`;
  }
  gradientString = `${gradientString})`;
  return { background: gradientString };
}

function formatColorProps(colors) {
  if (!colors) {
    return ['rgb(217, 213, 212)'];
  }

  let tempColors = [];
  if (Array.isArray(colors)) {
    tempColors = [...colors];
  } else {
    tempColors = [colors];
  }

  let codedColors = [];

  if (tempColors.includes('white')) codedColors.push('rgb(248, 231, 185)');
  if (tempColors.includes('blue')) codedColors.push('rgb(14, 104, 171)');
  if (tempColors.includes('black')) codedColors.push('rgb(100, 90, 85)');
  if (tempColors.includes('red')) codedColors.push('rgb(211, 32, 42)');
  if (tempColors.includes('green')) codedColors.push('rgb(0, 115, 62)');
  if (tempColors.includes('colorless')) codedColors.push('rgb(217, 213, 212)');

  return codedColors;
}

function ColorDot(props) {
  let shape = 'dot';
  if (props.shape) {
    shape = props.shape;
  }
  let stack = false;
  if (props.stack) {
    stack = props.stack;
  }
  let colors = 'colorless';
  if (props.color) {
    colors = formatColorProps(props.color);
  }
  let count = 1;
  if (props.count || props.count === 0) {
    count = props.count;
  }
  let visible = '';
  if (count <= 0) {
    visible = 'noCards';
  }

  return (
    <div className={`stack`}>
      <section>
        <div
          style={createLinearGradient(colors, shape)}
          className={`color-${shape} ${visible}`}
          data-color={props.color}
        ></div>
        {count >= 2 && (
          <div
            style={createLinearGradient(colors, shape)}
            className={`color-${shape} second`}
            data-color={props.color}
          ></div>
        )}
        {count > 2 && (
          <div
            style={createLinearGradient(colors, shape)}
            className={`color-${shape} third`}
            data-color={props.color}
          ></div>
        )}
      </section>
      {stack && <span className="moreThan3">{count}</span>}
    </div>
  );
}

export default ColorDot;
