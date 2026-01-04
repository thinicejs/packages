# @thinice/is-not-string

Type guard to check if a value is NOT a string.

## Installation

```bash
npm install @thinice/is-not-string
```

## Usage

```typescript
import { isNotString } from "@thinice/is-not-string";

isNotString(42); // true
isNotString(null); // true
isNotString("foo"); // false

// Useful for narrowing union types
const value: string | number = getData();
if (isNotString(value)) {
  value; // number (string excluded)
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-string
