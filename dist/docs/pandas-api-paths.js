export const pandasApiPath = (language, name) =>
  `/docs/read/${language}/pandas/api/${encodeURIComponent(name.replace(/^pandas\./, ''))}/`;

export function pandasApiRoute(name, section) {
  const leaf = encodeURIComponent(name.replace(/^pandas\./, ''));
  return '#/pandas/api-reference/api/' + leaf + (section ? '/' + section : '');
}
