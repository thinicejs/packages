import { test } from "node:test";
import assert from "node:assert";
import { throttle } from "./index.js";

test("throttle limits execution rate", async () => {
  let count = 0;
  const fn = throttle(() => count++, 50);

  fn();
  fn();
  fn();
  assert.strictEqual(count, 1);

  await new Promise((r) => setTimeout(r, 60));
  fn();
  assert.strictEqual(count, 2);
});

test("throttle passes arguments", () => {
  let result = "";
  const fn = throttle((a: string, b: string) => (result = a + b), 50);

  fn("hello", "world");
  assert.strictEqual(result, "helloworld");
});
