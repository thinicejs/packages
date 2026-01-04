/**
 * Converts values to numbers (null/undefined → 0, else Number(x)).
 */
export function toNumber(value: unknown): number {
  if (value == null) {
    return 0;
  }
  return Number(value);
}
