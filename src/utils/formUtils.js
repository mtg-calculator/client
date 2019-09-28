exports.checkForm = state => {
  const errors = {};
  const colors = Object.keys(state.colors);

  // check if deck size is selected
  if (!state.deckSize)
    errors.noDeckSize = 1;
  // check there is at least one color selected
  if (colors.length === 0)
    errors.noColors = 1;
  // check that for every color, sources <= turn
  colors.forEach(color => {
    if (state.colors[color].sources > state.colors[color].turn){
      if (!errors.colorCount)
        errors.colorCount = [];
      errors.colorCount.push(color);
    }
  });

  return errors;
}

exports.formatSubmission = state => {
  const formObj = {};
  Object.keys(state.colors).forEach(color => {
    formObj[color] = {
      deck_size: state.deckSize,
      achieve_chance: 80,
      sources: state.colors[color].sources,
      on_turn: state.colors[color].turn
    }
  });
  return formObj;
}