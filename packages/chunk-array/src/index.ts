/**
 * Splits arrays into chunks of N (no generators).
 */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  if (size <= 0 || Number.isNaN(size)) {
    return [];
  }
  const chunkSize = Math.floor(size);
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}
