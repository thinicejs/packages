# @thinice/is-empty-string

Checks if a string is empty (str === "").

## Installation

```bash
npm install @thinice/is-empty-string
```

## Usage

```typescript
import { isEmptyString } from "@thinice/is-empty-string";

isEmptyString("");      // true
isEmptyString("foo");   // false
isEmptyString(" ");     // false

if (isEmptyString(value)) {
  // value is "" here
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-empty-string
