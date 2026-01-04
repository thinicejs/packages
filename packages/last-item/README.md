# @thinice/last-item

Returns the last item in an array. Equivalent to `arr.at(-1)` (ES2022) for older environments.

## Installation

```bash
npm install @thinice/last-item
```

## Usage

```typescript
import { lastItem } from "@thinice/last-item";

lastItem([1, 2, 3]); // 3
lastItem(["a", "b"]); // "b"
lastItem([]); // undefined
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/last-item
