# @thinice/is-non-empty-array

Type guard: Array.isArray(x) && x.length > 0

## Installation

```bash
npm install @thinice/is-non-empty-array
```

## Usage

```typescript
import { isNonEmptyArray } from "@thinice/is-non-empty-array";

isNonEmptyArray([1, 2]);  // true
isNonEmptyArray([]);      // false
isNonEmptyArray("foo");   // false

if (isNonEmptyArray(value)) {
  // value is T[] with length > 0
}
```
