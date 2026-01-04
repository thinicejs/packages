/**
 * Type guard to check if a value is NOT an array.
 */
export function isNotArray<T>(value: T): value is Exclude<T, unknown[]> {
  return !Array.isArray(value);
}
