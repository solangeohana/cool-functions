import { sortAlphabetically } from './sort';

describe('utils:sortAlphabetically', () => {
  const data = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Alex', lastName: 'Ziegler' },
  ];
  const invalidDataFormat = [false, null, undefined, 0, -0, NaN, '', {}];

  it('returns an array sorted alphabetically by property', () => {
    const sortedData = sortAlphabetically(data, 'firstName');
    expect(sortedData).toEqual([
      { firstName: 'Alex', lastName: 'Ziegler' },
      { firstName: 'John', lastName: 'Doe' },
    ]);
  });

  it('returns null if data format is invalid', () => {
    invalidDataFormat.map((value) => {
      const invalidResult = sortAlphabetically(value as any[]);
      expect(invalidResult).toEqual(null);
    });
  });

  it('returns null if property does not exist in data objects', () => {
    const invalidResult = sortAlphabetically(data, 'invalidKey');
    expect(invalidResult).toEqual(null);
  });
});
