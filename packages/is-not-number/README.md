# @thinice/is-not-number

Type guard to check if a value is NOT a number.

## Installation

```bash
npm install @thinice/is-not-number
```

## Usage

```typescript
import { isNotNumber } from "@thinice/is-not-number";

isNotNumber("foo"); // true
isNotNumber(null); // true
isNotNumber(NaN); // true (NaN is not a valid number)
isNotNumber(42); // false

// Useful for narrowing union types
const value: string | number = getData();
if (isNotNumber(value)) {
  value; // string (number excluded)
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-number
