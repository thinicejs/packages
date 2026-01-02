# @thinice/is-not-number

Type guard to check if a value is NOT a number.

## Installation

```bash
npm install @thinice/is-not-number
```

## Usage

```typescript
import { isNotNumber } from "@thinice/is-not-number";

isNotNumber("foo");       // true
isNotNumber(null);        // true
isNotNumber(42);         // false

if (isNotNumber(value)) {
  // value is Exclude<unknown, number>
}
```
