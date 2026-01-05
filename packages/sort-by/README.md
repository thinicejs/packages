# @thinice/sort-by

Sort array by a key function (returns new array).

## Installation

```bash
npm install @thinice/sort-by
```

## Usage

```typescript
import { sortBy } from "@thinice/sort-by";

const users = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

sortBy(users, (u) => u.age);    // sorted by age
sortBy(users, (u) => u.name);   // sorted by name
```

Returns new array (original unchanged). See also ES2023's `toSorted()`.

## Source
https://github.com/thinicejs/utils/tree/main/packages/sort-by
