/* eslint-disable @typescript-eslint/no-explicit-any */
export const isObject = (object: any): boolean =>
  !!(object && typeof object === 'object' && !Array.isArray(object));
export const isObjectEmpty = (object: any): boolean | null => {
  if (!isObject(object)) return null;
  return Object.keys(object).length === 0;
};
export const objectHasProperty = (
  object: any,
  property: string,
): boolean | null =>
  isObject(object) && !isObjectEmpty(object) && property in object;
