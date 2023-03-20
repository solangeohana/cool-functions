import { objectHasProperty } from '../object';

export const sortAlphabetically = (data: any[], property?: string) => {
    const objInArrayContainsProperty = property && data.some((obj) => objectHasProperty(obj, property))
  
  
    if (!data || !Array.isArray(data) || !objInArrayContainsProperty) return null;
    return [...data].sort((a, b) => {
      const valA = property ? a[property] : a;
      const valB = property ? b[property] : b;
      if (valA < valB) {
        return -1;
      }
      if (valA > valB) {
        return 1;
      }
      return 0;
    });
  };
  