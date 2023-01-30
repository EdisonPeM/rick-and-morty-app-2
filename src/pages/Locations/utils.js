import { escapeRegExp } from "utils/regexp";

export const matchByQuery = (item = {}, keyword = "") => {
  const query = new RegExp(escapeRegExp(keyword), "i");
  const { name = "", type = "", dimension = "" } = item;
  return query.test(name) || query.test(type) || query.test(dimension);
};
