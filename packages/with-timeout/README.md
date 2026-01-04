# @thinice/with-timeout

Wraps a promise with a timeout.

## Installation

```bash
npm install @thinice/with-timeout
```

## Usage

```typescript
import { withTimeout } from "@thinice/with-timeout";

const promise = fetch("/api/data").then((r) => r.json());
await withTimeout(promise, 5000); // Throws if > 5s

await withTimeout(promise, 5000, new Error("Custom timeout")); // Custom error
```

Note: The original promise continues running after timeout - it's not cancelled.

## Source
https://github.com/thinicejs/utils/tree/main/packages/with-timeout
