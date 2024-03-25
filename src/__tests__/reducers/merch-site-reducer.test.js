import merchSiteReducer from '../../reducers/merch-site-reducer';

describe('merchSiteReducer', () => {

  let action;
  const itemData = {
    name: 'Rose and skull hoodie',
    description: 'Black hoodie with red and white design.',
    color: 'Black',
    size: 'Large',
    quantity: 5,
    id: 1
  }

  const currentState = {
    1: {
      name: 'Pentagram tee',
      description: 'Black shirt with small pentagram design.',
      color: 'Black',
      size: 'Medium',
      quantity: 3,
      id: 1
    }, 2: {
      name: 'Rose and skull hoodie',
      description: 'Black hoodie with red and white design.',
      color: 'Black',
      size: 'Large',
      quantity: 5,
      id: 2
    }
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchSiteReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add new item to mainItemList', () => {
    const { name, description, color, size, quantity, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      description: description,
      color: color,
      size: size,
      quantity: quantity,
      id: id
    };

    expect(merchSiteReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        color: color,
        size: size,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket.', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(merchSiteReducer(currentState, action)).toEqual({
      2: {
        name: 'Rose and skull hoodie',
        description: 'Black hoodie with red and white design.',
        color: 'Black',
        size: 'Large',
        quantity: 5,
        id: 2
      }
    });
  });

  test("Should successfully decrease an item's quantity by 1 when it is bought by a user.", () => {
    const { name, description, color, size, quantity, id } = itemData;
    action = {
      type: 'BUY_ITEM',
      name: name,
      description: description,
      color: color,
      size: size,
      quantity: quantity,
      id: id
    };

    expect(merchSiteReducer(itemData, action)).toEqual({
      name: name,
      description: description,
      color: color,
      size: size,
      quantity: 4,
      id: id
    });
  });
});