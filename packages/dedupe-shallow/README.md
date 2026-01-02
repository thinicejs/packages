# @thinice/dedupe-shallow

Removes duplicates using Set (no deep equality).

## Installation

```bash
npm install @thinice/dedupe-shallow
```

## Usage

```typescript
import { dedupeShallow } from "@thinice/dedupe-shallow";

dedupeShallow([1, 2, 2, 3]); // [1, 2, 3]
dedupeShallow(["a", "b", "a"]); // ["a", "b"]
dedupeShallow([1, 2, 3]); // [1, 2, 3]
```
