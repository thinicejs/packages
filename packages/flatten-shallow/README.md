# @thinice/flatten-shallow

Flattens an array one level deep.

## Installation

```bash
npm install @thinice/flatten-shallow
```

## Usage

```typescript
import { flattenShallow } from "@thinice/flatten-shallow";

flattenShallow([1, [2, 3], 4]); // [1, 2, 3, 4]
flattenShallow([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]
flattenShallow([1, 2, 3]); // [1, 2, 3]
```
