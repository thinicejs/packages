# @thinice/is-not-string

Type guard to check if a value is NOT a string.

## Installation

```bash
npm install @thinice/is-not-string
```

## Usage

```typescript
import { isNotString } from "@thinice/is-not-string";

isNotString(42);          // true
isNotString(null);        // true
isNotString("foo");       // false

if (isNotString(value)) {
  // value is Exclude<unknown, string>
}
```
