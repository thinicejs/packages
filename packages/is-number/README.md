# @thinice/is-number

Type guard to check if a value is a number.

## Installation

```bash
npm install @thinice/is-number
```

## Usage

```typescript
import { isNumber } from "@thinice/is-number";

isNumber(42);           // true
isNumber(0);            // true
isNumber(NaN);          // false
isNumber("42");         // false

if (isNumber(value)) {
  // value is number here
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-number
