# @thinice/with-timeout

Wraps a promise with a timeout (no retries, no cancelation).

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
