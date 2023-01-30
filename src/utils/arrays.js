export const getEmptyArray = (size) =>
  Array.from(Array(size)).map((_v, i) => i);

export const sortByAttr = (list, attrName) =>
  !attrName
    ? list
    : [...list].sort((prev, next) => {
        if (prev[attrName] < next[attrName]) {
          return -1;
        }

        if (prev[attrName] > next[attrName]) {
          return 1;
        }

        return 0;
      });
