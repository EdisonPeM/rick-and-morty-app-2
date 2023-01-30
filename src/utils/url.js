export const getIdFromUrl = (url) => +url.split("/").at(-1);

export const parseUrl = (url) => {
  try {
    return new URL(url, window.location);
  } catch (error) {
    console.error(error);
  }
};

export const normalizeEndpoint = (url) => {
  const { pathname, hash, search } = parseUrl(url);
  return `${pathname}${search}${hash}`;
};

export const paramsToObject = (searchParams) => {
  const params =
    typeof searchParams === "string"
      ? new URLSearchParams(searchParams)
      : searchParams;

  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
};

export const getValuesFromParams = (values = {}) => {
  const params = paramsToObject(window.location.search);
  const result = {};

  Object.keys(values).forEach((key) => {
    result[key] = params[key] ?? values[key];
  });

  return result;
};
