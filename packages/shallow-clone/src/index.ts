/**
 * Shallow clone for plain objects and arrays.
 */
export function shallowClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return [...obj] as T;
  }
  return { ...obj };
}
