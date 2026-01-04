/**
 * Type guard to check if a value is NOT a number (NaN is considered not a number).
 */
export function isNotNumber<T>(value: T): value is Exclude<T, number> {
  return typeof value !== "number" || Number.isNaN(value);
}
