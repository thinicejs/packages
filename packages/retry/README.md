# @thinice/retry

Retries an async function N times with optional delay.

## Installation

```bash
npm install @thinice/retry
```

## Usage

```typescript
import { retry } from "@thinice/retry";

await retry(async () => {
  return await fetch("/api/data").then(r => r.json());
}, { attempts: 3, delay: 1000 });

await retry(fetchData); // Uses defaults: 3 attempts, no delay
```

Options:
- `attempts` - Number of attempts (default: 3, must be positive integer)
- `delay` - Milliseconds between retries (default: 0)

Throws the last error if all attempts fail.

## Source
https://github.com/thinicejs/utils/tree/main/packages/retry
