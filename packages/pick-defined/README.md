# @thinice/pick-defined

Drops keys with undefined values from an object.

## Installation

```bash
npm install @thinice/pick-defined
```

## Usage

```typescript
import { pickDefined } from "@thinice/pick-defined";

pickDefined({ a: 1, b: undefined, c: 3 }); // { a: 1, c: 3 }
pickDefined({ a: 1, b: null, c: 0 }); // { a: 1, b: null, c: 0 } (null kept)
```

Use `omitNullish` if you also want to remove `null` values.

## Source
https://github.com/thinicejs/utils/tree/main/packages/pick-defined
