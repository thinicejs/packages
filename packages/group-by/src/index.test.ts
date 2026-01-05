import { test } from "node:test";
import assert from "node:assert";
import { groupBy } from "./index.js";

test("groupBy groups by key function", () => {
  const items = [
    { type: "a", value: 1 },
    { type: "b", value: 2 },
    { type: "a", value: 3 },
  ];
  const result = groupBy(items, (x) => x.type);
  assert.deepStrictEqual(result, {
    a: [
      { type: "a", value: 1 },
      { type: "a", value: 3 },
    ],
    b: [{ type: "b", value: 2 }],
  });
});

test("groupBy handles empty array", () => {
  assert.deepStrictEqual(groupBy([], (x) => x), {});
});

test("groupBy works with numeric keys", () => {
  const items = [1, 2, 3, 4, 5];
  const result = groupBy(items, (x) => x % 2);
  assert.deepStrictEqual(result, { 0: [2, 4], 1: [1, 3, 5] });
});
