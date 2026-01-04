# @thinice/is-not-empty-string

Type guard to check if a value is a non-empty string.

## Installation

```bash
npm install @thinice/is-not-empty-string
```

## Usage

```typescript
import { isNotEmptyString } from "@thinice/is-not-empty-string";

isNotEmptyString("foo"); // true
isNotEmptyString(" "); // true (whitespace is not empty)
isNotEmptyString(""); // false
isNotEmptyString(null); // false (not a string)
isNotEmptyString(42); // false (not a string)

if (isNotEmptyString(value)) {
  value.toUpperCase(); // value is string
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-empty-string
