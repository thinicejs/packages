/**
 * Sort array by a key function (returns new array).
 */
export function sortBy<T>(arr: T[], fn: (item: T) => number | string): T[] {
  return [...arr].sort((a, b) => {
    const va = fn(a);
    const vb = fn(b);
    return va < vb ? -1 : va > vb ? 1 : 0;
  });
}
