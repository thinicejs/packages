import { mkdir } from "node:fs/promises";

/**
 * Creates a directory if missing (creates parent directories as needed).
 */
export async function ensureDirExists(dirPath: string): Promise<void> {
  await mkdir(dirPath, { recursive: true });
}
