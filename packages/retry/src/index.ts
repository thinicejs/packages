import { sleepMs } from "@thinice/sleep-ms";

/**
 * Retries an async function N times with optional delay.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: { attempts?: number; delay?: number } = {}
): Promise<T> {
  const { attempts = 3, delay = 0 } = options;

  if (!Number.isInteger(attempts) || attempts < 1) {
    throw new Error("attempts must be a positive integer");
  }

  let lastError: Error;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (i < attempts - 1 && delay > 0) {
        await sleepMs(delay);
      }
    }
  }

  throw lastError!;
}
