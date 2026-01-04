/**
 * Type guard: Array.isArray(x) && x.length > 0
 */
export function isNonEmptyArray<T>(value: unknown): value is [T, ...T[]] {
  return Array.isArray(value) && value.length > 0;
}
