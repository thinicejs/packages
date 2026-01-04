# @thinice/dedupe-shallow

Removes duplicates using Set (reference equality, no deep comparison).

## Installation

```bash
npm install @thinice/dedupe-shallow
```

## Usage

```typescript
import { dedupeShallow } from "@thinice/dedupe-shallow";

dedupeShallow([1, 2, 2, 3]); // [1, 2, 3]
dedupeShallow(["a", "b", "a"]); // ["a", "b"]
dedupeShallow([3, 1, 2, 1, 3]); // [3, 1, 2] (preserves order)
```

Objects are compared by reference, not value:

```typescript
const obj = { a: 1 };
dedupeShallow([obj, obj, { a: 1 }]); // [obj, { a: 1 }] (2 items, not 1)
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/dedupe-shallow
