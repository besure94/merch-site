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
  case 'DELETE_ITEM':
    let newState = {...state};
    delete newState[id];
    return newState;
  // BUY_ITEM and RESTOCK_ITEM actions do not currently work //
  case 'BUY_ITEM':
    if (state[id]) {
      let boughtItem = {
        ...state[id],
        quantity: state[id].quantity - 1
      };
      return {
        ...state,
        [id]: boughtItem
      };
    }
    return state;
  case 'RESTOCK_ITEM':
    let restockedItem = {...state};
    restockedItem.quantity += 25;
    return restockedItem;
  default:
    return state;
  }
};

export default reducer;