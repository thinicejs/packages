# @thinice/once-async

Ensures an async function only runs once.

## Installation

```bash
npm install @thinice/once-async
```

## Usage

```typescript
import { onceAsync } from "@thinice/once-async";

const fetchData = onceAsync(async () => {
  return await fetch("/api/data").then((r) => r.json());
});

await fetchData(); // Calls fetch
await fetchData(); // Returns same promise, doesn't call fetch again
```
