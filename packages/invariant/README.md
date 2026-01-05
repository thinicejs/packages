# @thinice/invariant

Assert a condition, throw with message if false.

## Installation

```bash
npm install @thinice/invariant
```

## Usage

```typescript
import { invariant } from "@thinice/invariant";

function getUser(id: string | null) {
  invariant(id, "id is required");
  // id is now narrowed to string
  return db.users.find(id);
}
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/invariant
