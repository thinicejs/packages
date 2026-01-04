import { readFile } from "node:fs/promises";

/**
 * Returns file contents or undefined if file doesn't exist.
 * Throws on permission errors, disk failures, etc.
 */
export async function readFileIfExists(
  filePath: string,
  encoding: BufferEncoding = "utf8"
): Promise<string | undefined> {
  try {
    return await readFile(filePath, encoding);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return undefined;
    }
    throw error;
  }
}
