# @thinice/safe-json-parse

JSON.parse that returns undefined on failure.

## Installation

```bash
npm install @thinice/safe-json-parse
```

## Usage

```typescript
import { safeJsonParse } from "@thinice/safe-json-parse";

safeJsonParse('{"a": 1}');     // { a: 1 }
safeJsonParse("invalid");       // undefined
safeJsonParse("");             // undefined
```

## Source
https://github.com/thinicejs/utils/tree/main/packages/safe-json-parse
