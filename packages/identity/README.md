# @thinice/identity

Identity function (x => x) — useful for functional patterns.

## Installation

```bash
npm install @thinice/identity
```

## Usage

```typescript
import { identity } from "@thinice/identity";

identity(42); // 42
identity("foo"); // "foo"

// Useful for filtering falsy values
[1, 2, null, 3, 0, ""].filter(identity); // [1, 2, 3]

// Default transform function
const transform = options.transform ?? identity;
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/identity
