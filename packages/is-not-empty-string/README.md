# @thinice/is-not-empty-string

Type guard to check if a value is NOT an empty string.

## Installation

```bash
npm install @thinice/is-not-empty-string
```

## Usage

```typescript
import { isNotEmptyString } from "@thinice/is-not-empty-string";

isNotEmptyString("foo");  // true
isNotEmptyString(" ");    // true
isNotEmptyString("");     // false

if (isNotEmptyString(value)) {
  // value is Exclude<string, "">
}
```
