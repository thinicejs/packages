# @thinice/is-not-boolean

Type guard to check if a value is NOT a boolean.

## Installation

```bash
npm install @thinice/is-not-boolean
```

## Usage

```typescript
import { isNotBoolean } from "@thinice/is-not-boolean";

isNotBoolean(42); // true
isNotBoolean("foo"); // true
isNotBoolean(true); // false

// Useful for narrowing union types
const value: string | boolean = getData();
if (isNotBoolean(value)) {
  value; // string (boolean excluded)
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-boolean
