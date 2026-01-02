# @thinice/pick-keys

Picks specific keys from an object.

## Installation

```bash
npm install @thinice/pick-keys
```

## Usage

```typescript
import { pickKeys } from "@thinice/pick-keys";

pickKeys({ a: 1, b: 2, c: 3 }, ["a", "b"]); // { a: 1, b: 2 }
pickKeys({ x: 1, y: 2 }, ["x"]);            // { x: 1 }
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/pick-keys
