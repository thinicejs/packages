# @thinice/omit-keys

Omits specific keys from an object.

## Installation

```bash
npm install @thinice/omit-keys
```

## Usage

```typescript
import { omitKeys } from "@thinice/omit-keys";

omitKeys({ a: 1, b: 2, c: 3 }, ["a"]); // { b: 2, c: 3 }
omitKeys({ x: 1, y: 2 }, ["x", "y"]);  // {}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/omit-keys
