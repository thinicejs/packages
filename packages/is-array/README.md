# @thinice/is-array

Type guard to check if a value is an array.

## Installation

```bash
npm install @thinice/is-array
```

## Usage

```typescript
import { isArray } from "@thinice/is-array";

isArray([1, 2, 3]);     // true
isArray([]);            // true
isArray("not array");   // false

if (isArray(value)) {
  // value is T[] here
}
```
