# @thinice/group-by

Group array items by a key function.

## Installation

```bash
npm install @thinice/group-by
```

## Usage

```typescript
import { groupBy } from "@thinice/group-by";

const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Carol", role: "admin" },
];

groupBy(users, (u) => u.role);
// { admin: [Alice, Carol], user: [Bob] }
```

Note: ES2024 has native `Object.groupBy()`.

## Source
https://github.com/thinicejs/utils/tree/main/packages/group-by
