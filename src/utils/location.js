export const setHash = (hashValue = "") => {
  const url = new URL(window.location);
  url.hash = hashValue ? `#${hashValue}` : "";
  window.history.replaceState(null, "", url);
};

export const setSearch = (search = "") => {
  const url = new URL(window.location);
  const params = new URLSearchParams(search);
  url.search = params.toString();
  window.history.replaceState(null, "", url);
};
