/**
 * Clamps a number between min and max values.
 */
export function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value) || Number.isNaN(min) || Number.isNaN(max)) {
    throw new Error("clamp arguments must not be NaN");
  }
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }
  return Math.min(Math.max(value, min), max);
}
