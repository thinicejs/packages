# @thinice/is-not-array

Type guard to check if a value is NOT an array.

## Installation

```bash
npm install @thinice/is-not-array
```

## Usage

```typescript
import { isNotArray } from "@thinice/is-not-array";

isNotArray("foo");        // true
isNotArray(42);           // true
isNotArray([1, 2]);       // false

if (isNotArray(value)) {
  // value is Exclude<unknown, T[]>
}
```
