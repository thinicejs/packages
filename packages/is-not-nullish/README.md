# @thinice/is-not-nullish

Type guard to check if a value is NOT nullish (not null and not undefined).

## Installation

```bash
npm install @thinice/is-not-nullish
```

## Usage

```typescript
import { isNotNullish } from "@thinice/is-not-nullish";

isNotNullish(42);        // true
isNotNullish("foo");     // true
isNotNullish(null);      // false
isNotNullish(undefined); // false

if (isNotNullish(value)) {
  // value is T (not null | undefined)
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/is-not-nullish
