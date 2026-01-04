/**
 * Trims only if input is a string, otherwise returns input.
 */
export function safeTrim<T>(value: T): T extends string ? string : T {
  return (typeof value === "string" ? value.trim() : value) as T extends string
    ? string
    : T;
}
