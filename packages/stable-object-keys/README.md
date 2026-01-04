# @thinice/stable-object-keys

Returns sorted keys for deterministic output.

## Installation

```bash
npm install @thinice/stable-object-keys
```

## Usage

```typescript
import { stableObjectKeys } from "@thinice/stable-object-keys";

stableObjectKeys({ c: 1, a: 2, b: 3 }); // ["a", "b", "c"]
stableObjectKeys({ "10": 1, "2": 2 });  // ["10", "2"] (lexicographic)
```

Useful for cache keys, hashing, or anywhere deterministic key order matters.

## Source
https://github.com/thinicejs/utils/tree/main/packages/stable-object-keys
