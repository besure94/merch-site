const reducer = (state = {}, action) => {
  const { name, description, color, size, quantity, id } = action;
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          color: color,
          size: size,
          quantity: quantity,
          id: id
        }
      });
    default:
      return state;
  }
};

export default reducer;