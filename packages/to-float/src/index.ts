/**
 * Converts values to floats (parseFloat behavior).
 */
export function toFloat(value: unknown): number {
  if (value == null) {
    return NaN;
  }
  if (typeof value === "number") {
    return value;
  }
  return parseFloat(String(value));
}
