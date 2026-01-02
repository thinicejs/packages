# @thinice/chunk-array

Splits arrays into chunks of N (no generators).

## Installation

```bash
npm install @thinice/chunk-array
```

## Usage

```typescript
import { chunkArray } from "@thinice/chunk-array";

chunkArray([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
chunkArray([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
chunkArray([1, 2, 3, 4, 5, 6], 3); // [[1, 2, 3], [4, 5, 6]]
chunkArray([1, 2, 3], 10); // [[1, 2, 3]]
chunkArray([], 2); // []
chunkArray([1, 2, 3], 1); // [[1], [2], [3]]
chunkArray([1, 2, 3], 0); // []
chunkArray([1, 2, 3], -1); // []
```
