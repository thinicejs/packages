# @thinice/to-number

Converts values to numbers (null/undefined → 0, else Number(x)).

## Installation

```bash
npm install @thinice/to-number
```

## Usage

```typescript
import { toNumber } from "@thinice/to-number";

toNumber(null); // 0
toNumber(undefined); // 0
toNumber(true); // 1
toNumber(false); // 0
toNumber("123"); // 123
toNumber("123.45"); // 123.45
toNumber(""); // 0
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/to-number
