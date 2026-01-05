import { test } from "node:test";
import assert from "node:assert";
import { sortBy } from "./index.js";

test("sortBy sorts by numeric key", () => {
  const items = [{ n: 3 }, { n: 1 }, { n: 2 }];
  const result = sortBy(items, (x) => x.n);
  assert.deepStrictEqual(result, [{ n: 1 }, { n: 2 }, { n: 3 }]);
});

test("sortBy sorts by string key", () => {
  const items = [{ name: "charlie" }, { name: "alice" }, { name: "bob" }];
  const result = sortBy(items, (x) => x.name);
  assert.deepStrictEqual(result, [
    { name: "alice" },
    { name: "bob" },
    { name: "charlie" },
  ]);
});

test("sortBy returns new array", () => {
  const items = [3, 1, 2];
  const result = sortBy(items, (x) => x);
  assert.notStrictEqual(result, items);
  assert.deepStrictEqual(items, [3, 1, 2]);
});

test("sortBy handles empty array", () => {
  assert.deepStrictEqual(sortBy([], (x) => x), []);
});
