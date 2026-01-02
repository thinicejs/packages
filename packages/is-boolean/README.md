# @thinice/is-boolean

Type guard to check if a value is a boolean.

## Installation

```bash
npm install @thinice/is-boolean
```

## Usage

```typescript
import { isBoolean } from "@thinice/is-boolean";

isBoolean(true);        // true
isBoolean(false);       // true
isBoolean(0);           // false
isBoolean("true");      // false

if (isBoolean(value)) {
  // value is boolean here
}
```
