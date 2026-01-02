# @thinice/is-not-boolean

Type guard to check if a value is NOT a boolean.

## Installation

```bash
npm install @thinice/is-not-boolean
```

## Usage

```typescript
import { isNotBoolean } from "@thinice/is-not-boolean";

isNotBoolean(42);         // true
isNotBoolean("foo");      // true
isNotBoolean(true);       // false

if (isNotBoolean(value)) {
  // value is Exclude<unknown, boolean>
}
```
