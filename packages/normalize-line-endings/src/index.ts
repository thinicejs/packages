/**
 * Normalizes line endings to LF or CRLF.
 */
export function normalizeLineEndings(str: string, target: "lf" | "crlf" = "lf"): string {
  if (target === "lf") {
    return str.replace(/\r\n|\r/g, "\n");
  } else {
    return str.replace(/\r\n|\r|\n/g, "\r\n");
  }
}
