/**
 * Type guard to check if a value is a non-empty string.
 */
export function isNotEmptyString(value: unknown): value is string {
  return typeof value === "string" && value !== "";
}
