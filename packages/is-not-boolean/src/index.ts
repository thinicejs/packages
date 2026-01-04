/**
 * Type guard to check if a value is NOT a boolean.
 */
export function isNotBoolean<T>(value: T): value is Exclude<T, boolean> {
  return typeof value !== "boolean";
}
