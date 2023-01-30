export const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getSlug = (id, name) => `id${id}-${slugify(name)}`;

export const getIdFromSlug = (slug) =>
  slug
    .split(/[ -]/)
    .find((token) => token.match(/^id(\d)*$/))
    ?.replace("id", "") || "";
