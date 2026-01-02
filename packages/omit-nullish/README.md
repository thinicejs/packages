# @thinice/omit-nullish

Removes null and undefined, keeps falsy values.

## Installation

```bash
npm install @thinice/omit-nullish
```

## Usage

```typescript
import { omitNullish } from "@thinice/omit-nullish";

omitNullish({ a: 1, b: null, c: 0, d: "" }); // { a: 1, c: 0, d: "" }
omitNullish({ x: undefined, y: false });     // { y: false }
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/omit-nullish
