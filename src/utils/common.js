export const isEmpty = (v) => {
  if (v === null || v === undefined) {
    return true;
  }

  if (v?.length === 0) {
    return true;
  }

  if (Object.keys(v) === 0) {
    return true;
  }

  return false;
};

export const debounce = (callback, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
