import { isObject, isObjectEmpty, objectHasProperty } from '.';
import { unwantedValuesList } from '../../constants/test-general';

describe('utils: error', () => {
    const emptyObj = {};
    const object = {
        message: 'test message',
    };

  it('isObject, should return true if passed argument is of type object and not an array and false otherwise', () => {
    const passedValueIsAnObject = isObject(object);
    const passedValueIsAnArray = isObject(unwantedValuesList);
    expect(passedValueIsAnObject).toEqual(true);
    expect(passedValueIsAnArray).toEqual(false);
  });

  it('isObjectEmpty, should return true if object is empty', () => {
    const objectIsEmpty = isObjectEmpty(emptyObj);
    expect(objectIsEmpty).toEqual(true);
  });

  it('isObjectEmpty, should return false if object isn\'t empty', () => {
    const objectIsNotEmpty = isObjectEmpty(object);
    expect(objectIsNotEmpty).toEqual(false);
  });

  it('objectHasProperty, should return true if given property is in object', () => {
    const objectProperty = Object.keys(object)[0];
    const propertyInObject = objectHasProperty(object, objectProperty);
    expect(propertyInObject).toEqual(true);
  });

  it('objectHasProperty, should return false if given property isn\'t in object', () => {
    const propertyInObject = objectHasProperty(object, 'differentProp');
    expect(propertyInObject).toEqual(false);
  });

  it('objectHasProperty, should return false given object is not an object with properties ', () => {
    unwantedValuesList.forEach(falsyVal => {
        const falsyValueResult = objectHasProperty(falsyVal, 'testProp');
        expect(falsyValueResult).toBeFalsy();
    })
  });
});
