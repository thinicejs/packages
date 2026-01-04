# @thinice/is-number

Type guard to check if a value is a valid number (excludes NaN).

## Installation

```bash
npm install @thinice/is-number
```

## Usage

```typescript
import { isNumber } from "@thinice/is-number";

isNumber(42); // true
isNumber(3.14); // true
isNumber(Infinity); // true
isNumber(NaN); // false (NaN excluded)
isNumber("42"); // false

if (isNumber(value)) {
  // value is number here
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-number
