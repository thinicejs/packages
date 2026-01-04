# @thinice/has-own

Safe `hasOwnProperty` check that handles null prototypes. Equivalent to `Object.hasOwn()` (ES2022) for older environments.

## Installation

```bash
npm install @thinice/has-own
```

## Usage

```typescript
import { hasOwn } from "@thinice/has-own";

const obj = { foo: "bar" };
hasOwn(obj, "foo"); // true
hasOwn(obj, "toString"); // false

// Works with null prototypes
const nullProto = Object.create(null);
nullProto.foo = "bar";
hasOwn(nullProto, "foo"); // true
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/has-own
