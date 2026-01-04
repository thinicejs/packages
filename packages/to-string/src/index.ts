/**
 * Converts values to strings (null/undefined → "", else String(x)).
 */
export function toString(value: unknown): string {
  if (value == null) {
    return "";
  }
  return String(value);
}
