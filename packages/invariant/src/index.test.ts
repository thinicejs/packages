import { test } from "node:test";
import assert from "node:assert";
import { invariant } from "./index.js";

test("invariant passes on truthy", () => {
  invariant(true, "should not throw");
  invariant(1, "should not throw");
  invariant("string", "should not throw");
});

test("invariant throws on falsy", () => {
  assert.throws(() => invariant(false, "error message"), /error message/);
  assert.throws(() => invariant(null, "is null"), /is null/);
  assert.throws(() => invariant(undefined, "is undefined"), /is undefined/);
  assert.throws(() => invariant(0, "is zero"), /is zero/);
});
