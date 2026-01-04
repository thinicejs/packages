# @thinice/is-not-array

Type guard to check if a value is NOT an array.

## Installation

```bash
npm install @thinice/is-not-array
```

## Usage

```typescript
import { isNotArray } from "@thinice/is-not-array";

isNotArray("foo"); // true
isNotArray(42); // true
isNotArray([1, 2]); // false

// Useful for narrowing union types
const value: string | string[] = getData();
if (isNotArray(value)) {
  value; // string (array excluded)
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-array
