import { test } from "node:test";
import assert from "node:assert";
import { isNotEmptyString } from "./index.js";

test("isNotEmptyString returns false for empty string", () => {
  assert.strictEqual(isNotEmptyString(""), false);
});

test("isNotEmptyString returns true for non-empty strings", () => {
  assert.strictEqual(isNotEmptyString(" "), true);
  assert.strictEqual(isNotEmptyString("a"), true);
  assert.strictEqual(isNotEmptyString("hello"), true);
});

test("isNotEmptyString returns false for non-strings", () => {
  assert.strictEqual(isNotEmptyString(null), false);
  assert.strictEqual(isNotEmptyString(undefined), false);
  assert.strictEqual(isNotEmptyString(0), false);
  assert.strictEqual(isNotEmptyString([]), false);
});

test("isNotEmptyString narrows type", () => {
  const value: unknown = "hello";
  if (isNotEmptyString(value)) {
    // TypeScript should know value is not empty string
    assert.strictEqual(value.length > 0, true);
  }
});
