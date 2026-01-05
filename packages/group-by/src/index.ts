/**
 * Group array items by a key function.
 */
export function groupBy<T, K extends string | number>(
  arr: T[],
  fn: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of arr) {
    const key = fn(item);
    (result[key] ??= []).push(item);
  }
  return result;
}
