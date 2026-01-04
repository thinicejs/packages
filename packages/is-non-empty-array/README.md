# @thinice/is-non-empty-array

Type guard: Array.isArray(x) && x.length > 0

## Installation

```bash
npm install @thinice/is-non-empty-array
```

## Usage

```typescript
import { isNonEmptyArray } from "@thinice/is-non-empty-array";

isNonEmptyArray([1, 2]); // true
isNonEmptyArray([]); // false
isNonEmptyArray("foo"); // false

if (isNonEmptyArray<number>(value)) {
  value[0]; // number - guaranteed to exist
}
```

Note: Element types are NOT validated at runtime (same as `is-array`).

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-non-empty-array
