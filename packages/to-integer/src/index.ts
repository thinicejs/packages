/**
 * Converts values to integers (truncates decimals).
 */
export function toInteger(value: unknown): number {
  return Math.trunc(value == null ? 0 : Number(value));
}
