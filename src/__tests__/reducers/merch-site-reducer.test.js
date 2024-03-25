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
});