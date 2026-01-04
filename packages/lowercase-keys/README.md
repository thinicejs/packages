# @thinice/lowercase-keys

Lowercases object keys (no recursion, no opinions).

## Installation

```bash
npm install @thinice/lowercase-keys
```

## Usage

```typescript
import { lowercaseKeys } from "@thinice/lowercase-keys";

lowercaseKeys({ Foo: 1, Bar: 2 }); // { foo: 1, bar: 2 }
lowercaseKeys({ HELLO: "world" }); // { hello: "world" }

// Shallow - nested keys unchanged
lowercaseKeys({ Outer: { Inner: 1 } }); // { outer: { Inner: 1 } }
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/lowercase-keys
