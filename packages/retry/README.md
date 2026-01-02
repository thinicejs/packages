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

await retry(fetchData, { attempts: 5 }); // No delay
```
