import { test } from "node:test";
import assert from "node:assert";
import { debounce } from "./index.js";

test("debounce delays execution", async () => {
  let count = 0;
  const fn = debounce(() => count++, 50);

  fn();
  fn();
  fn();
  assert.strictEqual(count, 0);

  await new Promise((r) => setTimeout(r, 80));
  assert.strictEqual(count, 1);
});

test("debounce passes arguments", async () => {
  let result = "";
  const fn = debounce((a: string, b: string) => (result = a + b), 50);

  fn("hello", "world");
  await new Promise((r) => setTimeout(r, 80));

  assert.strictEqual(result, "helloworld");
});
