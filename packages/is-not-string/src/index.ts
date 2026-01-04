/**
 * Type guard to check if a value is NOT a string.
 */
export function isNotString<T>(value: T): value is Exclude<T, string> {
  return typeof value !== "string";
}
