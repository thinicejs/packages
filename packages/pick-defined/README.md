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
pickDefined({ x: undefined, y: 2 });       // { y: 2 }
```
